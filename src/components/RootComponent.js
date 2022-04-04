import React from 'react';
import Calendar from './Calendar/Calendar';
import EventsList from './EventsContainer/EventsList';

export const RootComponent = () => {
	return (
		<>
			<Calendar />
			<EventsList />
		</>
	);
};
