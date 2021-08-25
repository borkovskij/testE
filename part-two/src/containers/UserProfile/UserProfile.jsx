import React from 'react';
import P from 'prop-types';
import EditableProfile from '../../components/EditableProfile';
import LoadingScreen from '../../components/LoadingScreen';

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
		user: P.shape({
			id: P.number,
			email: P.string,
			first_name: P.string,
			last_name: P.string,
			avatar: P.string,
		}),
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
