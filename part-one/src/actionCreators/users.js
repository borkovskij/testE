import { USERS_LIST_PENDING } from '../actions/users';

export const fetchUsers = (page) => ({
	type: USERS_LIST_PENDING,
	payload: { page },
});
