import styled from 'styled-components';

export const ModalBackground = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(2px);
	transition: backdrop-filter 1.5s;
`;

export const ModalContainer = styled.div`
	width: 500px;
	background: white;
	border: 1px solid #ccc;
	transition: 1.1s ease-out;
	box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
	opacity: 1;
	visibility: visible;

	&.off {
		opacity: 0;
		visibility: hidden;
		filter: blur(8px);
		transform: scale(0.33);
		box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.2);
	}
`;

export const ButtonContainer = styled.div`
	border-top: 1px solid #ccc;
	background: #eee;
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.h2`
	border-bottom: 1px solid #ccc;
	padding: 1rem;
	margin: 0;
`;

export const Content = styled.div`padding: 1rem;`;
