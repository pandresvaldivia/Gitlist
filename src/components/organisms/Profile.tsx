import { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import { HEART } from '../icons/H_icons';
import ProfileDetails from '../molecules/profile/ProfileDetails';
import ProfileInfo from '../molecules/profile/ProfileInfo';
import ProfileStats from '../molecules/profile/ProfileStats';

const ProfileStyled = styled.div`
	grid-area: profile;

	.buttons-container {
		display: flex;
		gap: 0.5rem;
	}
`;

const Profile = () => {
	const [isFollowed, setIsFollowed] = useState(false);

	return (
		<ProfileStyled>
			<ProfileInfo />
			<ProfileStats />
			<ProfileDetails />
			<div className="buttons-container">
				<Button
					text={isFollowed ? 'Unfollow' : 'Follow'}
					onClick={() => setIsFollowed(!isFollowed)}
				/>
				<Button text="Sponsor" icon={HEART} iconColor="#CC68A0" />
			</div>
		</ProfileStyled>
	);
};

export default Profile;
