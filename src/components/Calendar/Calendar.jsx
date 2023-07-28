import React from 'react';
import { groupMonthDaysByWeeks, } from '../../utils/helpers';
import { Month } from './Month';
import { CalendarNavigation } from './CalendarNavigation';
import { daysOfWeek, monthesNames, } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectCalendar } from '../../redux/slices/calendar.slice';

export const Calendar = () => {
	const calemdar = useSelector(selectCalendar);
	const { displayedMonth: { month, year, } } = calemdar;
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
				month={groupMonthDaysByWeeks(year, month)}
			/>
		</div>
	);
};
