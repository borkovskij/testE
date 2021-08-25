import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import { FETCH_USER_PENDING, UPDATE_USER_PENDING } from '../../actions/user';
const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoading: state.user.isLoading,
	isDataLoaded: state.user.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserData: (userId) =>
		dispatch({
			type: FETCH_USER_PENDING,
			payload: { userId },
		}),
	handleSubmit: (userData) =>
		dispatch({
			type: UPDATE_USER_PENDING,
			payload: { userData },
		}),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
