import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { stringIsEmpty } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { selectCalendar } from '../../redux/slices/calendar.slice';
import { addNewEvent, editEvent } from '../../redux/slices/events.slice';

export const EventForm = (props) => {
	const calendar = useSelector(selectCalendar);
	const dispatch = useDispatch();
	const { chosenDate } = calendar;
	const { 
		isCreateForm,
		isEditForm,
		eventDataProp,
	} = props;
	const emptyEventForm ={
		title: '',
		description: '',
	};
	const [eventData, setEventData] = useState(isEditForm
		? {
			title: eventDataProp.title,
			description: eventDataProp.description,
		}
		: { ...emptyEventForm, });
	const { title, description, } = eventData;
	const onInputChange = (e) => {
		const { target: { value, name, }} = e;
		if(name === 'title' && value.length>30){
			return;
		}
		setEventData({
			...eventData,
			[name]: value,
		});
	};
	const saveEvent = () => {
		if([title, description].some(str => stringIsEmpty(str))){
			return alert('Some field is empty');
		}
		const eventData = {
			title,
			description,
			id: isCreateForm ? null : eventDataProp.id,
			date: chosenDate,
		};
		isCreateForm
			? dispatch(addNewEvent(eventData))
			: dispatch(editEvent(eventData));

		props.openEventForm();
		setEventData({ ...emptyEventForm, });
	};

	return (
		<div className="event-forn">
			<input
				value={title}
				onChange={onInputChange}
				placeholder='Title'
				name='title'
			/>
			<textarea
				value={description}
				onChange={onInputChange}
				placeholder='Description' name='description' />
			<button
				onClick={saveEvent}
			>Save</button>
		</div>
	);
};

EventForm.propTypes = {
	chosenDate: PropTypes.object,
	isCreateForm: PropTypes.bool,
	isEditForm: PropTypes.bool,
	eventDataProp: PropTypes.object,
	openEventForm: PropTypes.func,
	mutation: PropTypes.object,
	createNewEvent: PropTypes.func,
	editEventById: PropTypes.func,
};
