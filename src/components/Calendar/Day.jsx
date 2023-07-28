import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';
import { selectCalendar, setActiveDate } from '../../redux/slices/calendar.slice';

export const Day = (props) => {
	const dispatch = useDispatch();
	const { date, } = props;
	const calendar = useSelector(selectCalendar);
	const { chosenDate } = calendar;
	const isChoosenDay = isSameDay(date, chosenDate);

	return(
		<div
			onClick={()=>(dispatch(setActiveDate(date)))}
			className={isChoosenDay ? 'choosen-day' : 'day'}
		>
			{getDate(date)}
		</div>
	);
};

Day.propTypes = {
	date: PropTypes.object.isRequired,
};
