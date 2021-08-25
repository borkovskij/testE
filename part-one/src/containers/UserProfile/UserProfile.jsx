import React from 'react';
import P from 'prop-types';
import EditableProfile from '../../components/EditableProfile';
import LoadingScreen from '../../components/LoadingScreen';
import { userType } from '../../propTypes';

class UserProfile extends React.Component {
	static propTypes = {
		match: P.shape({
			params: P.shape({
				userId: P.string,
			}),
		}),
		fetchUserData: P.func.isRequired,
		handleSubmit: P.func.isRequired,
		isLoading: P.bool.isRequired,
		isDataLoaded: P.bool.isRequired,
		user: userType,
	};

	componentDidMount() {
		this.props.fetchUserData(Number(this.props.match.params.userId));
	}
	render() {
		return (
    <>
      {
        (this.props.isLoading || !this.props.isDataLoaded)
        ? <LoadingScreen />
        : <EditableProfile user={this.props.user} onSave={this.props.handleSubmit} />
      }
    </>
    );
	}
}

export default UserProfile;
