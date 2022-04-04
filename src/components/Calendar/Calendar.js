import React from 'react';
import PropTypes from 'prop-types';
import { groupMonthDaysByWeeks, } from '../../utils/helpers';
import { Month } from './Month';
import { connect } from 'react-redux';
import CalendarNavigation from './CalendarNavigation';
import { calendarAC } from '../../store/AC';
import { daysOfWeek, monthesNames, } from '../../utils/constants';

const Calendar = (props) => {
	const { displayedMonth: { month, year, } } = props;
	return(
		<div className="calendar">
			<CalendarNavigation />
			{monthesNames[month]}, {year}
			<div className='week-title'>
				{daysOfWeek.map((item, i) => {
					return(<span key={i}>{item}</span>);
				})}
			</div>
			<Month
				setActiveDate={props.setActiveDate}
				month={groupMonthDaysByWeeks(year, month)}
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