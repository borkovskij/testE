import { connect } from 'react-redux';

import UserProfile from './UserProfileUpdateFirstName';
import { changePage, fetchUserData, updateUserField } from '../../actionCreators/user';
const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoading: state.user.isLoading,
	error: state.user.error,
	updates: state.user.updates,
	currentPage: state.user.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserData: (userId) => dispatch(fetchUserData(userId)),
	uppdateUserField: (payload) => dispatch(updateUserField(payload)),
	changePage: (path) => dispatch(changePage(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
