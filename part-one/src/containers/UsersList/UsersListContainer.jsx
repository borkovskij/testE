import React, { Component } from 'react';
import P from 'prop-types';
import UsersList from '../../components/UsersList';
import { Container } from './styled';
import LoadingScreen from '../../components/LoadingScreen';
import Pagination from '../../components/Pagination/Pagination';
import { usersType } from '../../propTypes';
import Error from '../../components/Error';

class UsersListContainer extends Component {
	static propTypes = {
		isLoading: P.bool,
		users: usersType,
		fetchUsers: P.func.isRequired,
		pagination: P.shape({
			page: P.number,
			totalPages: P.number,
			perPage: P.number,
			total: P.number,
		}),
	};

	componentDidMount() {
		this.props.fetchUsers(this.props.pagination.page);
	}

	onPageChange = (page) => this.props.fetchUsers(page);

	render() {
		const { pagination, users, isLoading, error } = this.props;

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
						<UsersList users={users} />
						<Pagination
							page={pagination.page}
							onPageChange={this.onPageChange}
							itemsPerPage={pagination.perPage}
							totalItems={pagination.total}
							totalPages={pagination.totalPages}
						/>
					</React.Fragment>
				)}
			</Container>
		);
	}
}

export default UsersListContainer;
