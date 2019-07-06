import * as BASE from '../base/index';

const get = {
	default: 'omit',
	method: 'GET',
	mode: 'cors'
};

const post = {
	default: 'omit',
	method: 'POST',
	mode: 'cors'
};

const preHeader = {
	'Content-Type': 'application/json'
};

export const api = (url, path, options) => {
	const fullUrl = url + path;
	return fetch(fullUrl, options).then((res) => {
		if (res.status >= BASE.OK && res.status < BASE.BAD_REQUEST) {
			return res.json();
		}
	});
};

export const options = (TOKEN, METHOD, TYPE, OPT = {}) => {
	const large = {
		...preHeader
	};

	const head = large;
	const body = JSON.stringify(OPT);
	const headers = new Headers(head);
	let response;
	switch (METHOD) {
		case BASE.GET:
			response = {
				...get,
				body,
				headers
			};
			break;
		case BASE.POST:
			response = {
				...post,
				body,
				headers
			};
			break;
	}
	return response;
};
