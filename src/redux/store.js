import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './slices/calendar.slice';
import eventsSlice from './slices/events.slice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    events: eventsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
