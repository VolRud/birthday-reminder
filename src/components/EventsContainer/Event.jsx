import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { EventForm } from './EventForm';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/slices/events.slice';

export const Event = (props) => {
	const [editFormIsOpen, setOpmEditForm] = useState(false);
	const dispatch = useDispatch();
	const { chosenDate, eventData, eventData: { title, description, id, }, } = props;
	const deleteEventById = () => {
		dispatch(deleteEvent({id}));
	};
	const openEventForm = () => {
		setOpmEditForm(!editFormIsOpen);
	};

	return editFormIsOpen
		? (
			<EventForm
				openEventForm={openEventForm}
				editEventById={props.editEventById}
				chosenDate={chosenDate}
				eventDataProp={eventData}
				isEditForm={true}
			/>
		):(
			<div className="event-body">
				<span className="event-title">
					<span>{title}</span>
					<div>
						<button
							onClick={openEventForm}
						>Edit</button>
						<button
							onClick={deleteEventById}
						>Delete</button>
					</div>
				</span>
				<p>{description}</p>
			</div>
		);
};

Event.propTypes = {
	chosenDate: PropTypes.object,
	eventDataProp: PropTypes.object,
	eventData: PropTypes.object,
	editEventById: PropTypes.func,
};
