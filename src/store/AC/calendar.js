import { calendarConst } from '../constants';

export const switchToPreviousMonth = () => {
	return {
		type: calendarConst.SWITCH_TO_PREVIOUS_MONTH,
	};
};

export const switchToNextsMonth = () => {
	return {
		type: calendarConst.SWITCH_TO_NEXT_MONTH,
	};
};

export const setActiveDate = (date) => {
	return {
		type: calendarConst.SET_ACTIVE_DATE,
		payload: date,
	};
};