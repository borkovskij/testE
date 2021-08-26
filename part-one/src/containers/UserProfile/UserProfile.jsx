import React from 'react';
import P from 'prop-types';
import EditableProfile from '../../components/EditableProfile';
import LoadingScreen from '../../components/LoadingScreen';
import { userType } from '../../propTypes';
import Error from '../../components/Error';

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
		user: userType,
    error: P.bool.isRequired,
	};

	componentDidMount() {
		this.props.fetchUserData(Number(this.props.match.params.userId));
	}
	render() {

    const {isLoading, user, handleSubmit, error} = this.props;

    if (error) {
      return <Error/>
    }

    if (!Object.keys(user).length) {
			return isLoading ? <LoadingScreen /> : null;
		}

		return (
    <>
      {
        (isLoading)
        ? <LoadingScreen />
        : <EditableProfile user={user} onSave={handleSubmit} />
      }
    </>
    );
	}
}

export default UserProfile;
