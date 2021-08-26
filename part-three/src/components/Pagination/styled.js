import styled from 'styled-components';

export const PaginationWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const PageNumberContainer = styled.ul`
	width: 40%;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

export const ListItem = styled.li`
	height: 40px;
	width: 40px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000000;

	&:first-child,
	& :last-child {
		width: fit-content;
	}
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	color: #000000;
	font-size: 1rem;
	cursor: pointer;

	&:focus {
		outline: none;
	}
	&:disabled {
		color: #848484;
	}
`;
