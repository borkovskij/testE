import React from 'react';
import P from 'prop-types';

import { Container, ChangesContainer, Title, Arrow, Text } from './styled';
import Button from '../Button';
import { userType } from '../../propTypes';

class UserChanges extends React.Component {
	static propTypes = {
		user: userType,
		updatedUser: P.shape({
			first_name: P.string.isRequired,
			last_name: P.string.isRequired,
			updatedAt: P.string.isRequired,
		}),
		navigateToUsersList: P.func,
	};

	componentDidMount() {
		if (this.props.user === null) {
			this.props.navigateToUsersList();
		}
	}

	renderChange = () => {
		const { user, updatedUser } = this.props;

		return Object.keys(updatedUser).map((key) => {
			return user[key] && user[key] !== updatedUser[key] ? (
				<ChangesContainer key={key}>
					<Text>{user[key]}</Text>
					<Arrow />
					<Text>{updatedUser[key]}</Text>
				</ChangesContainer>
			) : null;
		});
	};

	render() {
		const { updatedUser, navigateToUsersList } = this.props;
		return (
			<Container>
				<Title>Updates: </Title>
				{this.renderChange()}
				<Text>Updated at: {updatedUser.updatedAt}</Text>
				<Button onClick={navigateToUsersList} text="Home" />
			</Container>
		);
	}
}

export default UserChanges;
