import React from 'react';
import P from 'prop-types';

import UserChanges from '../../components/UserChanges';
import { userType } from '../../propTypes';

class UserEditConfirmation extends React.Component {
	static propTypes = {
		user: userType,
		updatedUser: P.shape({
			first_name: P.string.isRequired,
			last_name: P.string.isRequired,
			updatedAt: P.string.isRequired,
		}),
		navigateToUsersList: P.func,
	};
	render() {
		const { navigateToUsersList, user, updatedUser } = this.props;
		return <UserChanges user={user} updatedUser={updatedUser} navigateToUsersList={navigateToUsersList} />;
	}
}

export default UserEditConfirmation;
