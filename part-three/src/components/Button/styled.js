import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 100px;
	height: 45px;
	border-radius: 5px;
	align-self: flex-end;
	border: 1px solid grey;
	${(props) => (props.disabled ? `background: lightgrey;` : `background: white;`)};
`;
