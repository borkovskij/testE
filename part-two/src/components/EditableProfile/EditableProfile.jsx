import React from 'react';
import P from 'prop-types';
import { Avatar, Container, NameInput, InputContainer } from './styled';
import Button from '../Button';
import { userType } from '../../propTypes';

const UPDATE_USER_FORM = 'updateUser';

class EditableProfile extends React.Component {
	static propTypes = {
		user: userType,
		onSave: P.func.isRequired,
	};

	state = {
		firstName: '',
		lastName: '',
	};

	componentDidMount() {
		this.setState({
			firstName: this.props.user.first_name,
			lastName: this.props.user.last_name,
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	hasChanges = () => {
		const { first_name, last_name } = this.props.user;

		const { firstName: changedFirstName, lastName: changedLastName } = this.state;
		return first_name !== changedFirstName || last_name !== changedLastName;
	};

	onSubmit = () => {
		const { firstName, lastName } = this.state;
		this.props.onSave({
			firstName,
			lastName,
			userId: this.props.user.id,
			updatedAt: new Date().toISOString(),
		});
	};
	render() {
		const { user } = this.props;
		return (
			<Container>
				<Avatar src={user.avatar} alt={user.last_name} />
				<InputContainer id={UPDATE_USER_FORM}>
					<NameInput type="text" value={this.state.firstName} id="firstName" onChange={this.handleChange} />
					<NameInput type="text" value={this.state.lastName} id="lastName" onChange={this.handleChange} />
				</InputContainer>
				<Button
					type="submit"
					form={UPDATE_USER_FORM}
					onClick={this.onSubmit}
					disabled={!this.hasChanges()}
					text="Submit"
				/>
			</Container>
		);
	}
}

export default EditableProfile;
