import * as TYPES from '../base/typeActions';

export const fetchLoginReq = (body, validate) => ({
	type: TYPES.FETCH_LOGIN_REQUEST,
	payload: {
		body,
		validate
	}
});
