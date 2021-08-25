import P from 'prop-types';
import { userType } from '../../propTypes';
import { CardContainer, Avatar, DataContainer, NameContainer, Data } from './styled';

const UserCard = ({ user, onClick, readOnly }) => {
	const handleClick = () => {
		!readOnly && onClick(user);
	};
	return (
		<CardContainer readOnly={readOnly} id={user.id} onClick={handleClick}>
			<Avatar src={user.avatar} />
			<DataContainer>
				<NameContainer>
					<Data>
						{user.first_name} {user.last_name}
					</Data>
				</NameContainer>
				<Data>{user.email}</Data>
			</DataContainer>
		</CardContainer>
	);
};

UserCard.propTypes = {
	user: userType,
	onClick: P.func,
	readOnly: P.bool,
};

UserCard.defaultProps = {
	onClick: () => {},
	readOnly: false,
};

export default UserCard;
