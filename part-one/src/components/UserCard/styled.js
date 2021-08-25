import styled from 'styled-components';
import { Link as WrappedLink } from 'react-router-dom';

export const Link = styled(WrappedLink)`
  text-decoration: none;
  outline: none;
  color: black;
  font-size: 16px;
  margin: 15px 0;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #ececec;
	width: 100%;
	min-height: 100px;
	border-radius: 7px;
	border: 3px solid black;
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
