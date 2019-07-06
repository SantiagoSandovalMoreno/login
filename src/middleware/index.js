import { call, put, delay } from 'redux-saga/effects';
import * as TYPES from '../base/typeActions';
import * as BASE from '../base/index';
import { api, options } from '../helpers/network';

//login
export function* fetchLogin({ payload }) {
	if (payload.validate === true) {
		payload.validate = '5cd41de53500002f347a5316';
	} else {
		payload.validate = '5cd41e3635000089007a531b';
	}
	const opt_post = options('', BASE.POST, BASE.LARGE, payload.body);
	try {
		const res = yield call(api, BASE.URL, payload.validate, opt_post);
		yield put({
			type: TYPES.FETCH_LOGIN_SUCCESS,
			data: res
		});
	} catch (e) {
		const { status } = e;
		yield put({
			type: TYPES.FETCH_LOGIN_FAILURE,
			status
		});
	}
}
