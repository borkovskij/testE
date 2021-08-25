import { connect } from 'react-redux';
import { USERS_LIST_PENDING } from '../../actions/users';
import UsersList from './UsersListContainer';

const mapStateToProps = (state) => ({
	isLoading: state.users.isLoading,
	isLoaded: state.users.isLoaded,
	users: state.users.users,
	page: state.pagination.page,
	totalPages: state.pagination.totalPages,
	perPage: state.pagination.perPage,
	total: state.pagination.total,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUsers: (page = 1) =>
		dispatch({
			type: USERS_LIST_PENDING,
			payload: { page },
		}),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
