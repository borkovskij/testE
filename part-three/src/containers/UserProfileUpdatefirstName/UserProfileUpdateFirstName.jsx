import React from 'react';
import P from 'prop-types';
import EditableProfile from '../../components/EditableProfile';
import LoadingScreen from '../../components/LoadingScreen';
import { userType } from '../../propTypes';
import Error from '../../components/Error';
import { ROUTES, STEPS } from '../../constants';

class UserProfile extends React.Component {
	static propTypes = {
		match: P.shape({
			params: P.shape({
				userId: P.string,
			}),
		}),
		fetchUserData: P.func.isRequired,
		isLoading: P.bool.isRequired,
		user: userType,
		error: P.bool.isRequired,
		uppdateUserField: P.func.isRequired,
		updates: P.shape({
			first_name: P.string,
			last_name: P.string,
		}),
		changePage: P.func,
		currentPage: P.oneOf([ STEPS.LAST_NAME, STEPS.FIRST_NAME ]),
	};

	componentDidMount() {
		const { user, fetchUserData, match } = this.props;
		if (user == null) {
			fetchUserData(Number(match.params.userId));
		}
	}

	handleNavigate = () => {
		this.props.changePage(`${ROUTES.USER_ROUTE}/${this.props.user.id}/${STEPS.LAST_NAME}`);
	};

	render() {
		const { isLoading, user, handleSubmit, error, uppdateUserField, updates } = this.props;

		if (error) {
			return <Error />;
		}

		if (user === null) {
			return isLoading ? <LoadingScreen /> : null;
		}

		return (
			<EditableProfile
				isLoading={isLoading}
				user={user}
				onSave={handleSubmit}
				handleUpdateField={uppdateUserField}
				updates={updates}
				currentPage={STEPS.FIRST_NAME}
				handleNavigate={this.handleNavigate}
			/>
		);
	}
}

export default UserProfile;
