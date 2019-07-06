import * as TYPES from '../base/typeActions';
import * as initial from '../states';

export const login = (state = initial.login, action) => {
	const handlers = {
		[TYPES.FETCH_LOGIN_SUCCESS]: handlerLoginSuccess,
		[TYPES.FETCH_LOGIN_FAILURE]: handlerLoginFailure,
		[TYPES.FETCH_LOGIN_INITIAL]: handlerLoginInitial
	};
	return handlers[action.type] ? handlers[action.type](state, action) : state;
};
//login
const handlerLoginSuccess = (state, action) => {
	const login = {
		login: action.data,
		status: 200
	};
	return {
		...state,
		login
	};
};

const handlerLoginFailure = (state, action) => {
	const temp = state.login;
	const { status } = action;
	const login = {
		...temp,
		status
	};
	return {
		...state,
		login
	};
};

const handlerLoginInitial = (state) => {
	const { login } = initial.login;
	return {
		...state,
		login
	};
};
