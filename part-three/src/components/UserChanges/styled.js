import styled from 'styled-components';

export const Container = styled.div`padding: 20px;`;

export const ChangesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.h1``;

export const Arrow = styled.div`
	padding: 0 5px;
	:after {
		content: '->';
	}
`;

export const Text = styled.div`margin: 10px 0;`;
