import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const routeMiddleware = routerMiddleware(history);
	const middlewares = [ sagaMiddleware, routeMiddleware ];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [ middlewareEnhancer ];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(rootReducer(history), initialState, composedEnhancers);

	sagaMiddleware.run(rootSaga);
	return store;
}
