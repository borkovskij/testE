import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import { fetchUserData, updateUserData } from '../../actionCreators/user';
const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoading: state.user.isLoading,
	error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserData: (userId) => dispatch(fetchUserData(userId)),
	handleSubmit: (userData) => dispatch(updateUserData(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
