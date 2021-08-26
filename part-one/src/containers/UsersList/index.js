import { connect } from 'react-redux';
import { fetchUsers } from '../../actionCreators/users';
import UsersList from './UsersListContainer';

const mapStateToProps = (state) => ({
	isLoading: state.users.isLoading,
	users: state.users.users,
	pagination: state.users.pagination,
	error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUsers: (page) => dispatch(fetchUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
