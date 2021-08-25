import { GET_PAGINATION } from '../actions/pagination';
import { CLEAR_DATA } from '../actions/users';

const initialState = {
	page: null,
	totalPages: null,
	perPage: null,
	total: null,
};

const pagination = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_PAGINATION:
			return {
				...state,
				...payload,
			};
		case CLEAR_DATA:
			return initialState;
		default:
			return state;
	}
};

export default pagination;
