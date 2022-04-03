import React from 'react';
import PropTypes from 'prop-types';
import { format, addDays } from 'date-fns';

export const ToPrevNextDay = (props) => {
	const { chosenDate } = props;

	const toPrevDay = () => {
		props.setActiveDate(addDays(chosenDate, -1));
	};
	const toNextDay = () => {
		props.setActiveDate(addDays(chosenDate, 1));
	};
	return(
		<div className="to-prev-next-day">
			<button onClick={toPrevDay}>To previous day</button>
			<span>{format(chosenDate, 'dd MM yyyy')}</span>
			<button onClick={toNextDay}>To next day</button>
		</div>
	);
};

ToPrevNextDay.propTypes = {
	chosenDate: PropTypes.object,
	setActiveDate: PropTypes.func,
};
