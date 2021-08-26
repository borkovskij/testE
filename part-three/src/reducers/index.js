import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import users from './users';
import user from './user';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		users,
		user,
	});

export default rootReducer;
