export default store => next => action => {
	const { type, payload } = action;
	console.log('|--',type, payload);
	next(action);
};
