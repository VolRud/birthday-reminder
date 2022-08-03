import React, { useEffect, } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EventForm } from './EventForm';
import { Event } from './Event';
import { useState } from 'react';
import { calendarAC } from '../../store/AC';
import { isSameDay } from 'date-fns';
import { sortByDate } from '../../utils/helpers';
import { ToPrevNextDay } from './ToPrevNextDay';
import { Loader } from '../ui/Loader';
import { eventsThunks } from '../../store/thunks';

const EventsList = (props) => {
	const [eventFormIsOpen, setEventFormOpen] = useState(false);

	useEffect(()=>{
		props.getEventsFromServer();
	}, []);
	const { events, eventsIsLoaded, chosenDate, } = props;

	const dayEvents = eventsIsLoaded && sortByDate(events.filter(item=>{
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
					setActiveDate={props.setActiveDate}
				/>
				{eventsIsLoaded && dayEvents.length === 0 && (<p>No events on this day</p>)}
				{eventsIsLoaded && dayEvents.map((item) => {
					return(
						<Event
							chosenDate={chosenDate}
							deleteEventById={props.deleteEventById}
							editEventById={props.editEventById}
							eventData={item}
							key={item.id} 
						/>
					);
				})}
				{eventFormIsOpen
					? (
						<EventForm
							createNewEvent={props.createNewEvent}
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

const mapStateToProps = (state) => {
	const { chosenDate, } = state.calendar;
	const { events, eventsIsLoaded, } = state.events;
	return {
		chosenDate,
		events,
		eventsIsLoaded,
	};
};

const mapDispatchToProps = dispatch => (
	{
		getEventsFromServer: () =>  dispatch(eventsThunks.getEventsFromServer()),
		deleteEventById: (eventId) =>  dispatch(eventsThunks.deleteEventById(eventId)),
		editEventById: (eventData) =>  dispatch(eventsThunks.editEventById(eventData)),
		setActiveDate: (date) => dispatch(calendarAC.setActiveDate(date)),
		createNewEvent: (eventData) => dispatch(eventsThunks.createNewEvent(eventData)),
	}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

EventsList.propTypes = {
	chosenDate: PropTypes.object,
	setActiveDate: PropTypes.func,
	getMarkedDays: PropTypes.func,
};
