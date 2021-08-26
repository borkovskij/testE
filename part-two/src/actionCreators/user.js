import { FETCH_USER_PENDING, UPDATE_USER_PENDING } from '../actions/user';

export const fetchUserData = (userId) => ({
	type: FETCH_USER_PENDING,
	payload: { userId },
});

export const updateUserData = (userData) => ({
	type: UPDATE_USER_PENDING,
	payload: { userData },
});
