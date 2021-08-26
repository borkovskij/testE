import React, { Component } from 'react';
import P from 'prop-types';
import UsersList from '../../components/UsersList';
import { Container } from './styled';
import LoadingScreen from '../../components/LoadingScreen';
import { usersType } from '../../propTypes';
import { ROUTES } from '../../constants';
import Error from '../../components/Error';

class UsersListContainer extends Component {
	static propTypes = {
		isLoading: P.bool,
		isLoaded: P.bool,
		pagination: P.shape({
			page: P.number,
			totalPages: P.number,
			perPage: P.number,
			total: P.number,
		}),
		users: usersType,
		fetchUsers: P.func.isRequired,
		clearData: P.func.isRequired,
	};

	componentDidMount() {
		this.props.fetchUsers(this.props.pagination.page);
	}

	componentWillUnmount() {
		this.props.clearData();
	}

	onPageChange = (page) => this.props.fetchUsers(page);

	handleNavigateToUserEdit = (id) => {
		this.props.history.push(`${ROUTES.USER_ROUTE}/${id}`);
	};

	render() {
		const { pagination, users, isLoading, error, fetchUsers } = this.props;

		if (error) {
			return <Error />;
		}

		if (users == null) {
			return isLoading ? <LoadingScreen /> : null;
		}

		return (
			<Container>
				{isLoading ? (
					<LoadingScreen />
				) : (
					<React.Fragment>
						<UsersList
							users={users}
							totalPages={pagination.totalPages}
							page={pagination.page}
							fetchUsers={fetchUsers}
							isLoading={isLoading}
							onEditUserClick={this.handleNavigateToUserEdit}
						/>
					</React.Fragment>
				)}
			</Container>
		);
	}
}

export default UsersListContainer;
