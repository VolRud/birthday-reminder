import axios from 'axios';
// import { endpoints } from '../store/constants';
import { API_URL } from './constants';

export const requestToServer = (
	requestData,
	actionType,
	dispatch
) => {
	if(!isRequest(actionType)) {
		return;
	}
	const requestMethod = getRequestType(actionType);
	const url = getUrl(requestMethod, actionType, requestData);
	console.log('req - - ', {
		url,
		method: requestMethod,
		data: requestData,
	});
	axios({
		url,
		method: requestMethod,
		data: requestData,
	})
		.then(res => {
			console.log('res', res);
			if(res.data.statusCode === 501){
				dispatch({
					type: actionType+'_ERROR', 
					payload: res.data,
				});
			}
			dispatch({
				type: actionType+'_SUCCESS', 
				payload: res.data,
			});
		}).catch((error) => {
			console.log('2 err - ',error);
			dispatch({
				type: actionType +'_ERROR', 
				payload: error,
			});
		}); 
};

const getUrl = (method, actionType, requestData) => {
	// let url = API_URL + endpoints[actionType];
	let url = API_URL;
	if (
		method === 'delete'
        || method === 'patch'
	){
		return url + '/' + requestData.id;
	} else {
		return url;
	}
};

const isRequest = (actionType) => {
	return actionType.includes('REQUEST');
};

const getRequestType = (actionType) => {
	return actionType.split('_')[1].toLowerCase();
};