import styled from 'styled-components';
import ProfileAvatar from './ProfileAvatar';
import { User } from '../../../interfaces/user.interface';
import { useAppContext } from '../../../contexts/App.context';

const ProfileInfoStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font: var(--headline2-light);
	margin-block-end: 1rem;

	.profile-info__title {
		font: var(--headline1);
		color: var(--white);
		margin-block-end: 0.5rem;
	}

	.profile-info__description {
		min-width: 0;
	}

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
	}
`;

const ProfileInfo = () => {
	const { user } = useAppContext();
	const { name, login: username, avatar_url: avatar } = user;

	return (
		<ProfileInfoStyled>
			<ProfileAvatar image={avatar} alt={`${name} avatar`} />
			<div className="profile-info__description">
				<p className="profile-info__title">{name}</p>
				<p>{username}</p>
			</div>
		</ProfileInfoStyled>
	);
};

export default ProfileInfo;
