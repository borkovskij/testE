import { ROUTES } from '../../constants';
import { userType } from '../../propTypes';
import { CardContainer, Avatar, DataContainer, NameContainer, Data, Link } from './styled';

const UserCard = ({ user }) => {
	const getUserLink = () => `${ROUTES.USER_ROUTE}/${user.id}`;
	return (
		<Link to={getUserLink()}>
			<CardContainer id={user.id}>
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
		</Link>
	);
};

UserCard.propTypes = {
	user: userType,
};

export default UserCard;
