import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import users from './users';
import user from './user';
import pagination from './pagination';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		users,
		user,
		pagination,
	});

export default rootReducer;
