import React, { Component } from 'react';
import P from 'prop-types';
import { Container } from './styled';
import UserCard from '../UserCard';
import Modal from '../Modal';

class UsersList extends Component {
	static propTypes = {
		page: P.number,
		totalPages: P.number,
		fetchUsers: P.func,
		isLoading: P.bool,
		onEditUserClick: P.func,
		users: P.arrayOf(
			P.shape({
				id: P.number.isRequired,
				email: P.string.isRequired,
				first_name: P.string.isRequired,
				last_name: P.string.isRequired,
				avatar: P.string.isRequired,
			})
		),
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

	renderUsers = () => {
		return this.props.users.map((user) => <UserCard key={user.id} user={user} onClick={this.toggleModal} />);
	};

	render() {
		return (
			<Container ref={this.scrollerRef} onScroll={this.handleScroll}>
				{this.renderUsers()}
				{this.props.isLoading && <p>Loading...</p>}
				<Modal active={this.state.active} onClose={this.toggleModal} openUser={this.handleOpenUser}>
					<UserCard readOnly user={this.state.user} />
				</Modal>
			</Container>
		);
	}
}

export default UsersList;