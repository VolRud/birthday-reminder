import {
	eachDayOfInterval,
	isMonday,
} from 'date-fns';

export const getFirsttdayOfMonth = (year, month) => {
	return  new Date(year, month, 1);
};

export const getLastdayOfMonth = (year, month) => {
	return  new Date(year, month +1, 0);
};

export const groupMonthDaysByWeeks = (year, month) => {
	const eachDayOfMonth = getEachDayOfMonth(year, month);
	let calendarMonth = [];
	let emptyWeek = [];
	eachDayOfMonth.forEach((item, i) => {
		emptyWeek.push(item);
		if(isMonday(eachDayOfMonth[++i]) || ++i === eachDayOfMonth.length){
			calendarMonth.push(emptyWeek);
			emptyWeek = [];
		}
	});
	return calendarMonth;
};

export const sortByDate = (array) => {
	return array.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
};

export const getEachDayOfMonth = (year, month) => eachDayOfInterval({
	start: getFirsttdayOfMonth(year, month),
	end: getLastdayOfMonth(year, month),
});

export const stringIsEmpty = (string) => string.length < 1;
