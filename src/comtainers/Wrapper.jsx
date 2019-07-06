import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from '../combinators/index';
import Saga from '../combinators/saga';
import LogginPage from './LogginPage';
import SuccessPage from '../components/SuccessPage';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootreducer,
	compose(
		applyMiddleware(sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

sagaMiddleware.run(Saga);

export default class Wrapper extends Component {
	render() {
		return (
			<Provider store={store}>
				<LogginPage />
				<SuccessPage />
			</Provider>
		);
	}
}
