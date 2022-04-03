import React from 'react';
import PropTypes from 'prop-types';
import { getCalendarMonth, getMonthName } from '../utils/helpers';
import { Month } from './Month';
import { connect } from 'react-redux';
import CalendarNavigation from './CalendarNavigation';
import { calendarAC } from '../store/AC';

const Calendar = (props) => {
	const { displayedMonth:{ month, year} } = props;

	return(
		<div className="calendar">
			<CalendarNavigation />
			{getMonthName(month)}, {year}
			<div className='week-title'>
				<span>Monday</span>
				<span>Tuesday</span>
				<span>Wednesday</span>
				<span>Thursday</span>
				<span>Friday</span>
				<span>Saturday</span>
				<span>Sunday</span>
			</div>
			<Month
				setActiveDate={props.setActiveDate}
				month={getCalendarMonth(year, month)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { chosenDate, displayedMonth, } = state.calendar;
	return {
		chosenDate,
		displayedMonth,
	};
};

const mapDispatchToProps = dispatch => (
	{
		setActiveDate: (date) => dispatch(calendarAC.setActiveDate(date)),
	}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

Calendar.propTypes = {
	displayedMonth: PropTypes.object,
	setActiveDate: PropTypes.func,
};