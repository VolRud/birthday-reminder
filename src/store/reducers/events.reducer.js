import { eventsConstants, _SUCCESS } from '../constants';

const initialState = {
	events: [],
	eventsIsLoaded: false,
};

export const events = (state = initialState, action) => {
	const { payload, type, } = action;
	console.log(type, payload);
	switch (type) {
	case eventsConstants.REQUEST_GET_RECEIVE_EVENTS:
	case eventsConstants.REQUEST_POST_CREATE_NEW_EVENT:
		return {
			...state,
			eventsIsLoaded: false,
		};
	case eventsConstants.REQUEST_GET_RECEIVE_EVENTS + _SUCCESS:
		return {
			events: payload,
			eventsIsLoaded: true,
		};
	case eventsConstants.REQUEST_POST_CREATE_NEW_EVENT + _SUCCESS:
		return {
			...state,
			eventsIsLoaded: true,
			events: [...state.events, payload], 
		};
	case eventsConstants.REQUEST_DELETE_EVENT_BY_ID:
		return {
			...state,
			eventsIsLoaded: false,
			deletedEventId: payload.id,
		};
	case eventsConstants.REQUEST_DELETE_EVENT_BY_ID + _SUCCESS:
		return {
			...state,
			eventsIsLoaded: true,
			deletedEventId: null,
			events: state.events.filter(item => item.id !== state.deletedEventId)

		};
	case eventsConstants.REQUEST_PATCH_EDIT_EVENT_BY_ID:
		return {
			...state,
			eventsIsLoaded: false,
		};
	case eventsConstants.REQUEST_PATCH_EDIT_EVENT_BY_ID + _SUCCESS:
		return {
			...state,
			eventsIsLoaded: true,
			events: state.events.map(item => {
				return item.id === payload.id
					? payload
					: item;
			})
		};
	default:
		return {
			...state,
		};
	}
};
