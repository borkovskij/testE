import axios from './axiosConfig';

export const getUserData = (userId) => {
	return axios.get(`https://reqres.in/api/users/${userId}`);
};

export const updateUserData = (userData) => {
	const { userId, firstName, lastName, updatedAt } = userData;
	return axios.put(`https://reqres.in/api/users/${userId}`, {
		first_name: firstName,
		last_name: lastName,
		updatedAt,
	});
};
