import { createSlice } from '@reduxjs/toolkit';
import { getMonth, getYear } from 'date-fns';

const today = new Date();

const initialState = {
  chosenDate: new Date(),
  displayedMonth: {
    month: getMonth(today),
    year: getYear(today),
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    switchToPrewiewMoth: (state) => {
      state.displayedMonth = getDisplayedMonth(
        state.displayedMonth,
        state.displayedMonth.month - 1
      );
    },
    switchToNextMoth: (state) => {
      state.displayedMonth = getDisplayedMonth(
        state.displayedMonth,
        state.displayedMonth.month + 1
      );
    },
    setActiveDate: (state, action) => {
      state.chosenDate = action.payload;
    },
  },
});

export const { switchToPrewiewMoth, switchToNextMoth, setActiveDate } =
  calendarSlice.actions;

export const selectCalendar = (state) => state.calendar;

export default calendarSlice.reducer;

const getDisplayedMonth = (currentMonth, changedMonth) => {
  const { year } = currentMonth;
  if (changedMonth < 0) {
    return {
      month: 11,
      year: year - 1,
    };
  } else if (changedMonth > 11) {
    return {
      month: 0,
      year: year + 1,
    };
  } else {
    return {
      month: changedMonth,
      year,
    };
  }
};
