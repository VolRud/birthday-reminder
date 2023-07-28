import React from 'react';
import './App.scss';
import { Calendar } from './components/Calendar/Calendar';
import { EventsList } from './components/EventsContainer/EventsList';

function App() {
  return (
    <>
      <Calendar />
      <EventsList />
    </>
  );
}

export default App;
