import React from 'react';
import P from 'prop-types';

import UserChanges from '../../components/UserChanges';
import { userType } from '../../propTypes';
import Error from '../../components/Error';

class UserEditConfirmation extends React.Component {
	static propTypes = {
		user: userType,
		updatedUser: P.shape({
			first_name: P.string.isRequired,
			last_name: P.string.isRequired,
			updatedAt: P.string.isRequired,
		}),
		navigateToUsersList: P.func,
		error: P.bool.isRequired,
	};
	render() {
		const { navigateToUsersList, user, updatedUser, error } = this.props;

		if (error) {
			return <Error />;
		}

		return <UserChanges user={user} updatedUser={updatedUser} navigateToUsersList={navigateToUsersList} />;
	}
}

export default UserEditConfirmation;
