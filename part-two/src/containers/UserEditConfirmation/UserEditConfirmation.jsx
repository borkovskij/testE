import React from 'react';
import P from 'prop-types';

import UserChanges from '../../components/UserChanges';

class UserEditConfirmation extends React.Component {
	static propTypes = {
		user: P.shape({
			id: P.number,
			email: P.string,
			first_name: P.string,
			last_name: P.string,
			avatar: P.string,
		}),
		updatedUser: P.shape({
			first_name: P.string.isRequired,
			last_name: P.string.isRequired,
			updatedAt: P.string.isRequired,
		}),
		navigateToUsersList: P.func,
	};
	render() {
		const { navigateToUsersList, user, updatedUser } = this.props;
		return (
			<div>
				<UserChanges user={user} updatedUser={updatedUser} navigateToUsersList={navigateToUsersList} />
			</div>
		);
	}
}

export default UserEditConfirmation;
