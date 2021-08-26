import { USERS_LIST_PENDING, USERS_LIST_SUCCESS, USERS_LIST_FAIL, CLEAR_DATA } from '../actions/users';

const initialState = {
	isLoading: false,
	users: null,
	pagination: {
		page: 1,
		totalPages: null,
		perPage: null,
		total: null,
	},
	error: false,
};

const users = (state = initialState, { type, payload }) => {
	switch (type) {
		case USERS_LIST_PENDING:
			return {
				...state,
				isLoading: true,
				error: false,
			};
		case USERS_LIST_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: state.users ? [ ...state.users, ...payload.users ] : [ ...payload.users ],
				pagination: {
					...payload.pagination,
				},
			};
		case USERS_LIST_FAIL:
			return {
				...state,
				isLoading: false,
				error: true,
			};
		case CLEAR_DATA: {
			return initialState;
		}
		default:
			return state;
	}
};

export default users;
