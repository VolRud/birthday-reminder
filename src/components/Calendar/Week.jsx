import React from 'react';
import PropTypes from 'prop-types';
import {Day} from './Day';
import uniqid from 'uniqid';

export const Week = (props) => {
	const { weekDays,} = props;
	return(
		<div className='week'>
			{weekDays.map(item => {
				return (
					<Day
						date={item}
						key={uniqid()}
					/>
				);
			})}
		</div>
	);
};

Week.propTypes = {
	weekDays: PropTypes.any,
};
