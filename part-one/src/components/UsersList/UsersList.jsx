import React from 'react';
import { Container } from './styled';
import UserCard from '../UserCard';
import { usersType } from '../../propTypes';

const UsersList = ({ users }) => (
	<Container>
		{users.length ? users.map((user) => <UserCard key={user.id} user={user} />) : <div>No Users Found</div>}
	</Container>
);

UsersList.propTypes = {
	users: usersType,
};

export default UsersList;
