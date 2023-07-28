import React from 'react';
import { switchToNextMoth, switchToPrewiewMoth } from '../../redux/slices/calendar.slice';
import { useDispatch } from 'react-redux';

export const CalendarNavigation = () => {
	const dispatch = useDispatch();

	return(
		<div className='calendar-nav'>
			<div onClick={()=>(dispatch(switchToPrewiewMoth()))}>
                To previous
			</div>

			<div onClick={()=>(dispatch(switchToNextMoth()))}>
                To next
			</div>
		</div>
	);
};
  