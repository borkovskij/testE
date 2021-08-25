import React, { Component } from 'react';
import P from 'prop-types';
import UsersList from '../../components/UsersList';
import { Container } from './styled';
import LoadingScreen from '../../components/LoadingScreen';
import { usersType } from '../../propTypes';

class UsersListContainer extends Component {
	static propTypes = {
		isLoading: P.bool,
		isLoaded: P.bool,
		page: P.number,
		totalPages: P.number,
		perPage: P.number,
		total: P.number,
		users: usersType,
		fetchUsers: P.func.isRequired,
		clearData: P.func.isRequired,
	};

	static defaultProps = {
		page: 1,
	};

	componentDidMount() {
		this.props.fetchUsers();
	}

	componentWillUnmount() {
		this.props.clearData();
	}

	onPageChange = (page) => this.props.fetchUsers(page);

	handleNavigateToUserEdit = (id) => {
		this.props.history.push(`/user/${id}`);
	};

	render() {
		return (
			<Container>
				{!this.props.isLoaded ? (
					<LoadingScreen />
				) : (
					<React.Fragment>
						<UsersList
							users={this.props.users}
							page={this.props.page}
							totalPages={this.props.totalPages}
							fetchUsers={this.props.fetchUsers}
							isLoading={this.props.isLoading}
							onEditUserClick={this.handleNavigateToUserEdit}
						/>
					</React.Fragment>
				)}
			</Container>
		);
	}
}

export default UsersListContainer;
