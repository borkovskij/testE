import React, { Component } from 'react';
import P from 'prop-types';
import UsersList from '../../components/UsersList';
import { Container } from './styled';
import LoadingScreen from '../../components/LoadingScreen';
import Pagination from '../../components/Pagination/Pagination';
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
	};

	static defaultProps = {
		page: 1,
	};

	componentDidMount() {
		this.props.fetchUsers();
	}

	onPageChange = (page) => this.props.fetchUsers(page);

	render() {
		return (
			<Container>
				{this.props.isLoading || !this.props.isLoaded ? (
					<LoadingScreen />
				) : (
					<React.Fragment>
						<UsersList users={this.props.users} />
						<Pagination
							page={this.props.page}
							onPageChange={this.onPageChange}
							itemsPerPage={this.props.perPage}
							totalItems={this.props.total}
							totalPages={this.props.totalPages}
						/>
					</React.Fragment>
				)}
			</Container>
		);
	}
}

export default UsersListContainer;
