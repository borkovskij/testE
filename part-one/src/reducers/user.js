import { FETCH_USER_PENDING, FETCH_USER_SUCCESS, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS } from '../actions/user';

const initialState = {
	isLoading: false,
	isDataLoaded: false,
	user: {},
	updatedUser: {},
};

const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_USER_PENDING:
		case UPDATE_USER_PENDING:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isDataLoaded: true,
				user: payload.user,
			};
		case UPDATE_USER_SUCCESS: {
			return {
				...state,
				isLoading: false,
				updatedUser: {
					...payload.userData,
				},
			};
		}
		default:
			return state;
	}
};

export default user;
