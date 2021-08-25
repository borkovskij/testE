import { USERS_LIST_PENDING, USERS_LIST_SUCCESS } from '../actions/users';

const initialState = {
	isLoading: false,
	isLoaded: false,
	users: [],
};

const users = (state = initialState, { type, payload }) => {
	switch (type) {
		case USERS_LIST_PENDING:
			return {
				...state,
				isLoading: true,
			};
		case USERS_LIST_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				users: [ ...state.users, ...payload.users ],
			};
		default:
			return state;
	}
};

export default users;
