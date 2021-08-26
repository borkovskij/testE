import {
	FETCH_USER_FAIL,
	FETCH_USER_PENDING,
	FETCH_USER_SUCCESS,
	UPDATE_USER_FAIL,
	UPDATE_USER_FIELD,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
} from '../actions/user';

const initialState = {
	isLoading: false,
	user: null,
	updatedUser: {},
	error: false,
	updates: {
		first_name: '',
		last_name: '',
	},
};

const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_USER_PENDING:
		case UPDATE_USER_PENDING:
			return {
				...state,
				isLoading: true,
				error: false,
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: payload.user,
				updates: {
					first_name: payload.user.first_name,
					last_name: payload.user.last_name,
				},
			};
		case UPDATE_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				updatedUser: {
					...payload.userData,
				},
			};
		case UPDATE_USER_FIELD: {
			return {
				...state,
				updates: {
					...state.updates,
					[payload.key]: payload.updatedFieldValue,
				},
			};
		}
		case FETCH_USER_FAIL:
		case UPDATE_USER_FAIL:
			return {
				...state,
				isLoading: false,
				error: true,
			};
		default:
			return state;
	}
};

export default user;
