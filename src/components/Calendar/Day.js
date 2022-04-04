import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from 'date-fns';
import { connect } from 'react-redux';
import { isSameDay } from 'date-fns';

const Day = (props) => {
	const { date, chosenDate, } = props;
	const isChoosenDay = isSameDay(date, chosenDate);
	return(
		<div
			onClick={()=>props.setActiveDate(date)}
			className={isChoosenDay ? 'choosen-day' : 'day'}
		>
			{getDate(date)}
		</div>
	);
};

const mapStateToProps = (state) => {
	const { chosenDate, } = state.calendar;
	return {
		chosenDate,
	};
};

export default connect(mapStateToProps, null)(Day);

Day.propTypes = {
	date: PropTypes.object.isRequired,
	chosenDate: PropTypes.object.isRequired,
	setActiveDate: PropTypes.func.isRequired,
};
