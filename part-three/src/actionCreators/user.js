import { CHANGE_PAGE, FETCH_USER_PENDING, UPDATE_USER_FIELD, UPDATE_USER_PENDING } from '../actions/user';

export const fetchUserData = (userId) => ({
	type: FETCH_USER_PENDING,
	payload: { userId },
});

export const updateUserData = (userData) => ({
	type: UPDATE_USER_PENDING,
	payload: { userData },
});

export const updateUserField = (payload) => ({
	type: UPDATE_USER_FIELD,
	payload,
});

export const changePage = (path) => ({
	type: CHANGE_PAGE,
	payload: { path },
});
