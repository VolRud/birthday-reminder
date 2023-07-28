import React, { useEffect, } from 'react';
import { EventForm } from './EventForm';
import { Event } from './Event';
import { useState } from 'react';
import { isSameDay } from 'date-fns';
import { sortByDate } from '../../utils/helpers';
import { ToPrevNextDay } from './ToPrevNextDay';
import { Loader } from '../ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { receiveEvents, selectEvents } from '../../redux/slices/events.slice';
import { selectCalendar, setActiveDate } from '../../redux/slices/calendar.slice';

export const EventsList = () => {
	const [eventFormIsOpen, setEventFormOpen] = useState(false);
	const dispatch = useDispatch();
	const events = useSelector(selectEvents);
	const calendar = useSelector(selectCalendar);
	const { eventsList, eventsIsLoaded, } = events;

	useEffect(()=>{
		if(!eventsIsLoaded){
			dispatch(receiveEvents());
		}
	});
	const { chosenDate, } = calendar;
	const dayEvents = eventsIsLoaded && sortByDate(eventsList.filter(item=>{
		return isSameDay(new Date(item.date), chosenDate);
	}));
	const openEventForm = () => {
		setEventFormOpen(!eventFormIsOpen);
	};
	return eventsIsLoaded
		? (
			<div className="eventsList">
				<ToPrevNextDay
					chosenDate={chosenDate}
					setActiveDate={()=>(dispatch(setActiveDate))}
				/>
				{eventsIsLoaded && dayEvents.length === 0 && (<p>There are no birthdays on this day</p>)}
				{eventsIsLoaded && dayEvents.map((item) => {
					return(
						<Event
							chosenDate={chosenDate}
							eventData={item}
							key={item.id} 
						/>
					);
				})}
				{eventFormIsOpen
					? (
						<EventForm
							openEventForm={openEventForm}
							isCreateForm={true}
							chosenDate={chosenDate}
						/>
					)
					: (<button
						onClick={openEventForm}
					>Add new event</button>)
				}
			</div>
		)
		: (<Loader />);
};

