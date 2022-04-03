import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { format, setHours, setMinutes } from 'date-fns';
import { stringIsEmpty } from '../utils/helpers';

export const EventForm = (props) => {
	const {
		chosenDate,
		isCreateForm,
		isEditForm,
		eventDataProp,
	} = props;
	eventDataProp && console.log('_hh__', );
	const [eventData, setEventData] = useState(isEditForm
		? {
			title: eventDataProp.title,
			description: eventDataProp.description,
			time: format(new Date(eventDataProp.date), 'HH:mm'),
		}
		: {
			title: '',
			description: '',
			time: '00:00',
		});
	const { title, description, time, } = eventData;
	const onInputChange = (e) => {
		const { target: { value, name, }} = e;
		setEventData({
			...eventData,
			[name]: value,
		});
	};
	const saveEvent = () => {
		if([title, description, time].some(str => stringIsEmpty(str))){
			alert('Some field is empty');
			return;
		}
		const [h, min] = time.split(':');
		let eventDate = setHours(chosenDate, h);
		eventDate = setMinutes(eventDate, min);
		props.mutation.mutate({
			method: isCreateForm ? 'POST' : 'PATCH',
			data: {
				title,
				description,
				id: isCreateForm ? null : eventDataProp.id,
				date: eventDate,
			}});
		props.openEventForm();
		setEventData({
			title: '',
			description: '',
			time: '',
		});
	};

	return (
		<div className="event-forn">
			<input
				value={time}
				onChange={onInputChange}
				placeholder="Time"
				type="time"
				name='time'
			/>
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
	chosenDate: PropTypes.object.isRequired,
	setActiveDate: PropTypes.func.isRequired,
	isCreateForm: PropTypes.bool.isRequired,
	isEditForm: PropTypes.bool.isRequired,
	eventDataProp: PropTypes.object.isRequired,
	openEventForm: PropTypes.func.isRequired,
	mutation: PropTypes.object.isRequired,
};
