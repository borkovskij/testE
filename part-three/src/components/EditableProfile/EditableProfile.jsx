import React, { Fragment } from 'react';
import P from 'prop-types';
import { Avatar, Container, NameInput, InputContainer, FormContainer } from './styled';
import Button from '../Button';
import { userType } from '../../propTypes';
import { STEPS } from '../../constants';
import LoadingScreen from '../LoadingScreen';

const UPDATE_USER_FORM = 'updateUser';

class EditableProfile extends React.Component {
	static propTypes = {
		user: userType,
		onSave: P.func,
		handleUpdateField: P.func.isRequired,
		updates: P.shape({
			first_name: P.string,
			last_name: P.string,
		}),
		currentPage: P.oneOf([ STEPS.FIRST_NAME, STEPS.LAST_NAME ]),
		handleNavigate: P.func.isRequired,
		isLoading: P.bool.isRequired,
	};

	handleChange = (e) => {
		this.props.handleUpdateField({
			key: e.target.id,
			updatedFieldValue: e.target.value,
		});
	};

	hasChanges = () => {
		const { first_name, last_name } = this.props.user;
		const { first_name: changedFirstName, last_name: changedLastName } = this.props.updates;
		return (
			changedFirstName && changedLastName && (first_name !== changedFirstName || last_name !== changedLastName)
		);
	};

	onSubmit = () => {
		const { first_name, last_name } = this.props.updates;
		this.props.onSave({
			firstName: first_name,
			lastName: last_name,
			userId: this.props.user.id,
			updatedAt: new Date().toISOString(),
		});
	};

	render() {
		const { user, isLoading } = this.props;
		return (
			<Container>
				{isLoading ? (
					<LoadingScreen />
				) : (
					<Fragment>
						<Avatar src={user.avatar} alt={user.last_name} />
						<FormContainer>
							<Button
								onClick={this.props.handleNavigate}
								text={this.props.currentPage === STEPS.FIRST_NAME ? 'Go next' : 'Go prev'}
							/>
							<InputContainer id={UPDATE_USER_FORM}>
								<NameInput
									type="text"
									value={this.props.updates[this.props.currentPage]}
									id={this.props.currentPage}
									onChange={this.handleChange}
								/>
							</InputContainer>
							{this.props.currentPage === STEPS.LAST_NAME && (
								<Button
									type="submit"
									form={UPDATE_USER_FORM}
									onClick={this.onSubmit}
									disabled={!this.hasChanges()}
									text="Submit"
								/>
							)}
						</FormContainer>
					</Fragment>
				)}
			</Container>
		);
	}
}

export default EditableProfile;
