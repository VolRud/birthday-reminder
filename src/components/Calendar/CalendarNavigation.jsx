import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calendarAC } from '../../store/AC';

const CalendarNavigation = (props) => {
	return(
		<div className='calendar-nav'>
			<div onClick={props.toPreviousMonth}>
                To previous
			</div>

			<div onClick={props.toNextMonth}>
                To next
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => (
	{
		toNextMonth: () => dispatch(calendarAC.switchToNextsMonth()),
		toPreviousMonth: () => dispatch(calendarAC.switchToPreviousMonth()),
	}
);
  

export default connect(null, mapDispatchToProps)(CalendarNavigation);

CalendarNavigation.propTypes = {
	toNextMonth: PropTypes.func.isRequired,
	toPreviousMonth: PropTypes.func.isRequired,
};