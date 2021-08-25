import React, { Component } from 'react';
import P from 'prop-types';
import { Container } from './styled';
import UserCard from '../UserCard';
import { userType } from '../../propTypes';

class UsersList extends Component {
	static propTypes = {
		users: userType,
	};

	renderUsers = () => {
		return this.props.users.map((user) => <UserCard key={user.id} user={user} />);
	};
	render() {
		return <Container>{this.renderUsers()}</Container>;
	}
}

export default UsersList;
