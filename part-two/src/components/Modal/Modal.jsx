import React from 'react';
import P from 'prop-types';
import { ButtonContainer, Content, ModalContainer, Title, ModalBackground } from './styled';
import Button from '../Button';
import { userType } from '../../propTypes';

export default class Modal extends React.Component {
	static propTypes = {
		onClose: P.func.isRequired,
		openUser: P.func.isRequired,
		active: P.bool.isRequired,
		user: userType,
	};

	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.active) {
			return null;
		}
		return (
			<ModalBackground>
				<ModalContainer id="modal">
					<Title>User</Title>
					<Content>{this.props.children}</Content>
					<ButtonContainer>
						<Button onClick={this.onClose} text="Close" />
						<Button onClick={this.props.openUser} text="Edit" />
					</ButtonContainer>
				</ModalContainer>
			</ModalBackground>
		);
	}
}
