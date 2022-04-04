import React from 'react';
import PropTypes from 'prop-types';
import { format, } from 'date-fns';
import { useState } from 'react';
import { EventForm } from './EventForm';

export const Event = (props) => {
	const [editFormIsOpen, setOpmEditForm] = useState(false);
	const { chosenDate, eventData, eventData: { title, description, id, }, } = props;
	const deleteEvent = () => {
		props.mutation.mutate({
			method: 'DELETE',
			data: {id},
		});
	};
	const openEventForm = () => {
		setOpmEditForm(!editFormIsOpen);
	};

	const getTime = () => {
		return format(new Date(eventData.date), 'HH:mm');
	};
	return editFormIsOpen
		? (
			<EventForm
				openEventForm={openEventForm}
				chosenDate={chosenDate}
				mutation={props.mutation}
				eventDataProp={eventData}
				isEditForm={true}
			/>
		):(
			<div className="event-body">
				<span className="event-title">
					<span>{getTime()}</span>
					<span>{title}</span>
					<div>
						<button
							onClick={openEventForm}
						>Edit</button>
						<button
							onClick={deleteEvent}
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
	mutation: PropTypes.object,
};
