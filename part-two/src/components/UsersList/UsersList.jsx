import React, { Component } from 'react';
import P from 'prop-types';
import { Container, NotFound } from './styled';
import UserCard from '../UserCard';
import Modal from '../Modal';
import { usersType } from '../../propTypes';

class UsersList extends Component {
	static propTypes = {
		page: P.number,
		totalPages: P.number,
		fetchUsers: P.func,
		isLoading: P.bool,
		onEditUserClick: P.func,
		users: usersType,
	};

	constructor(props) {
		super(props);
		this.scrollerRef = React.createRef();
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			active: false,
		};
	}

	async handleScroll() {
		const { fetchUsers, page, totalPages } = this.props;
		const scroller = this.scrollerRef.current;
		if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight && page < totalPages) {
			fetchUsers(page + 1);
		}
	}

	toggleModal = (user) => {
		this.setState({
			active: !this.state.active,
			user,
		});
	};

	handleOpenUser = () => {
		this.props.onEditUserClick(this.state.user.id);
	};

	render() {
		const { users } = this.props;
		return (
			<Container ref={this.scrollerRef} onScroll={this.handleScroll}>
				{users.length ? (
					users.map((user) => <UserCard key={user.id} user={user} onClick={this.toggleModal} />)
				) : (
					<NotFound>users not found</NotFound>
				)}
				{this.props.isLoading && <p>Loading...</p>}
				<Modal active={this.state.active} onClose={this.toggleModal} openUser={this.handleOpenUser}>
					<UserCard readOnly user={this.state.user} />
				</Modal>
			</Container>
		);
	}
}

export default UsersList;
