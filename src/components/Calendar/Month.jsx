import React from 'react';
import PropTypes from 'prop-types';
import { Week } from './Week';
import uniqid from 'uniqid';

export const Month = (props) => {
	const { month, } = props;
	return(
		<div className='month-wrapper'>
			{month.map(item => {
				return(
					<Week
						weekDays={item}
						key={uniqid()}
					/>
				);
			})}
		</div>
	);
};

Month.propTypes = {
	month: PropTypes.array.isRequired,
};