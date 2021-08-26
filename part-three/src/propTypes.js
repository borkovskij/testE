import P from 'prop-types';

export const userType = P.shape({
	id: P.number.isRequired,
	email: P.string.isRequired,
	first_name: P.string.isRequired,
	last_name: P.string.isRequired,
	avatar: P.string.isRequired,
});

export const usersType = P.arrayOf(userType);
