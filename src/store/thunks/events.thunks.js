import { eventsConstants } from '../constants';
import { requestToServer } from '../../services/requestToServer';

export const getEventsFromServer = () => {
	return dispatch => {
		dispatch({
			type: eventsConstants.REQUEST_GET_RECEIVE_EVENTS,
			payload: {},
		});
		requestToServer(
			{},
			eventsConstants.REQUEST_GET_RECEIVE_EVENTS,
			dispatch,
		);
	};
};

export const editEventById = (eventData) => {
	return dispatch => {
		dispatch({
			type: eventsConstants.REQUEST_PATCH_EDIT_EVENT_BY_ID,
			payload: eventData,
		});
		requestToServer(
			eventData,
			eventsConstants.REQUEST_PATCH_EDIT_EVENT_BY_ID,
			dispatch,
		);
	};
};

export const deleteEventById = (eventId) => {
	return dispatch => {
		dispatch({
			type: eventsConstants.REQUEST_DELETE_EVENT_BY_ID,
			payload: eventId,
		});
		requestToServer(
			eventId,
			eventsConstants.REQUEST_DELETE_EVENT_BY_ID,
			dispatch,
		);
	};
};

export const createNewEvent = (eventData) => {
	return dispatch => {
		dispatch({
			type: eventsConstants.REQUEST_POST_CREATE_NEW_EVENT,
			payload: eventData,
		});
		requestToServer(
			eventData,
			eventsConstants.REQUEST_POST_CREATE_NEW_EVENT,
			dispatch,
		);
	};
};
