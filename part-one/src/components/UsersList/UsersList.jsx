import React from 'react';
import { Container, NotFound } from './styled';
import UserCard from '../UserCard';
import { usersType } from '../../propTypes';

const UsersList = ({ users }) => {
	console.log(users.length);
	return (
		<Container>
			{users.length ? (
				users.map((user) => <UserCard key={user.id} user={user} />)
			) : (
				<NotFound>userssss not found</NotFound>
			)}
		</Container>
	);
};

UsersList.propTypes = {
	users: usersType,
};

export default UsersList;
