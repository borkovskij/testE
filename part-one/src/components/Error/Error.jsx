import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Container, Message } from './styled';

const Error = () => {
	return (
		<Container>
			<Message>Oops... Something went wrong</Message>
			<Link to={ROUTES.USERS_ROUTE}>Go home</Link>
		</Container>
	);
};

export default Error;
