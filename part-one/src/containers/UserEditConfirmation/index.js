import { connect } from 'react-redux';

import UserEditConfirmation from './UserEditConfirmation';

import { navigateToUsersList } from '../../actionCreators/userEditConfirmation';

const mapStateToProps = (state) => ({
	user: state.user.user,
	updatedUser: state.user.updatedUser,
	error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
	navigateToUsersList: () => dispatch(navigateToUsersList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEditConfirmation);
