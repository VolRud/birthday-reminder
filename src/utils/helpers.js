import {
    eachDayOfInterval,
    getISODay,
    isMonday,
} from 'date-fns';


export const getDateObject = date => new Date(date);

// export const getFullYear = (date) => {
//     return getDateObject(date).getFullYear();
// }

// export const getDate = (date) => {
//     return getDateObject(date).getDate();
// }
export const getMonth = (date) => {
    return getDateObject(date).getMonth();
}

// export const getDay = (date) => {
//     return getDateObject(date).getDay();
// }
const monthesNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const getMonthName = month => monthesNames[month];

export const getFirsttdayOfMonth = (year, month) => {
    return  new Date(year, month, 1);
}

export const getLastdayOfMonth = (year, month) => {
    return  new Date(year, month +1, 0);
}

export const getCalendarMonth = (year, month) => {
    const eachDayOfMonth = getEachDayOfMonth(year, month);
    let calendarMonth = [];
    let emptyWeek = [];
    eachDayOfMonth.forEach((item, i) => {
        emptyWeek.push(item);
        if(isMonday(eachDayOfMonth[i+1]) || i+1 === eachDayOfMonth.length){
            calendarMonth.push(emptyWeek);
            emptyWeek = [];
        }
    });
    return calendarMonth;
}

export const sortByDate = (array) => {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
}

export const getEachDayOfMonth = (year, month) => eachDayOfInterval({
    start: getFirsttdayOfMonth(year, month),
    end: getLastdayOfMonth(year, month),
});

export const stringIsEmpty = (string) => string.length < 1;
