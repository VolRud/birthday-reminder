import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { requestToServer } from '../../services/requestToServer';

const initialState = {
  eventsList: [],
  eventsIsLoaded: false,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // changeFilterState: (state, action) => {
    //   state.filterState = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(receiveEvents.pending, (state) => {
        state.eventsIsLoaded = false;
      })
      .addCase(receiveEvents.fulfilled, (state, action) => {
        state.eventsIsLoaded = true;
        state.eventsList = action.payload;
      })
      .addCase(addNewEvent.fulfilled, (state, action) => {
        state.eventsList.push(action.payload);
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        let eventsList = current(state.eventsList);
        state.eventsList = eventsList.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        let eventsList = current(state.eventsList);
        state.eventsList = eventsList.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        });
      });
  },
});

export const receiveEvents = createAsyncThunk(
  'events/receiveEvents',
  async () => {
    const events = await requestToServer({}, 'GET');
    return events;
  }
);

export const addNewEvent = createAsyncThunk(
  'events/addNewEvent',
  async (data) => {
    const event = await requestToServer(data, 'POST');
    return event;
  }
);

export const editEvent = createAsyncThunk('events/editEvent', async (data) => {
  const event = await requestToServer(data, 'PATCH');
  return event;
});

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (data) => {
    await requestToServer(data, 'DELETE');
    return data;
  }
);

// export const { receiveEvents } =  eventsSlice.actions;

export const selectEvents = (state) => state.events;

export default eventsSlice.reducer;
