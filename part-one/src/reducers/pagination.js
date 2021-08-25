import { GET_PAGINATION } from '../actions/pagination';

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
		default:
			return state;
	}
};

export default pagination;
