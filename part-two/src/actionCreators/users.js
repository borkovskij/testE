import { CLEAR_DATA, USERS_LIST_PENDING } from '../actions/users';

export const fetchUsers = (page) => ({
	type: USERS_LIST_PENDING,
	payload: { page },
});

export const clearData = () => ({
	type: CLEAR_DATA,
});
