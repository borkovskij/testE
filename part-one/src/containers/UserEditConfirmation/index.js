import { connect } from 'react-redux';
import { NAVIGATE_HOME } from '../../actions/user';

import UserEditConfirmation from './UserEditConfirmation';

const mapStateToProps = (state) => ({
	user: state.user.user,
	updatedUser: state.user.updatedUser,
});

const mapDispatchToProps = (dispatch) => ({
	navigateToUsersList: () =>
		dispatch({
			type: NAVIGATE_HOME,
		}),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEditConfirmation);
