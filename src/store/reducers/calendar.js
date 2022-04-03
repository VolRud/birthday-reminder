import {
    getDate,
    getMonth,
    getYear,
} from 'date-fns';
import { calendarConst } from '../constants';

const today = new Date();
const initialState = {
    chosenDate: new Date(),
    displayedMonth: {
        month: getMonth(today),
        year: getYear(today),
    },
};

export const calendar = (state = initialState, action) => {
	const { payload, type, } = action;
	switch (type) {
	case calendarConst.SWITCH_TO_PREVIOUS_MONTH:
		return {
			...state,
            displayedMonth: getDisplayedMonth(
                state.displayedMonth,
                state.displayedMonth.month - 1
            ),
		};
    case calendarConst.SWITCH_TO_NEXT_MONTH:
        return {
            ...state,
            displayedMonth: getDisplayedMonth(
                state.displayedMonth,
                state.displayedMonth.month + 1
            ),
        }
    case calendarConst.SET_ACTIVE_DATE:
        return {
            ...state,
            chosenDate: payload,
        }
		break;
	}
    
	return state;
};

const getDisplayedMonth = (currentMonth, changedMonth) => {
    const { month, year, } = currentMonth;
    if(changedMonth < 0){
        return {
            month: 11,
            year: year - 1,
        }
    } else if(changedMonth > 11){
        return {
            month: 0,
            year: year + 1,
        }
    } else{
        return {
            month: changedMonth,
            year,
        }
    }
}