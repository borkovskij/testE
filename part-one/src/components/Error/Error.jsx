import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Message } from './styled';

const Error = () => {
	return (
		<Container>
			<Message>Oops... Something went wrong</Message>
			<Link to="/">Go home</Link>
		</Container>
	);
};

export default Error;
