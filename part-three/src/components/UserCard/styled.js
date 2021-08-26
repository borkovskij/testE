import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({ readOnly }) => (readOnly ? 'none' : '#ececec')};
	width: 100%;
	min-height: 120px;
	border-radius: ${({ readOnly }) => (readOnly ? '0' : '7px')};
	border: ${({ readOnly }) => (readOnly ? 'none' : '3px solid black')};
	margin: 20px 0;
	font-size: 16px;
`;

export const Avatar = styled.img`
	height: 100%;
	width: auto;
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	justify-content: space-between;
`;

export const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
	outline: none;
`;

export const Data = styled.span`font-size: 14px;`;
