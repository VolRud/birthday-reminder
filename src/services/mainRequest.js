import axios from 'axios';

const API_URL = 'http://localhost:8000/events/';

export const mainRequest = (method, data) => {
	return axios({
		url: getURL(method, data),
		method,
		data,
		headers: {'Content-Type': 'application/json'},
	}).then(res => res.data);
};

const getURL = (method, data) => {
	if (
		method === 'DELETE'
        || method === 'PATCH'
	){
		return API_URL + data.id;
	} else {
		return API_URL;
	}
};