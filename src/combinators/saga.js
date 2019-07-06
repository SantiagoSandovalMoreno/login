import { takeLatest, all } from 'redux-saga/effects';
import * as saga from '../middleware/index';
import * as TYPES from '../base/typeActions';

function* Saga() {
	yield all([ takeLatest(TYPES.FETCH_LOGIN_REQUEST, saga.fetchLogin) ]);
}

export default Saga;
