import styled from 'styled-components';

const ProfileAvatarStyled = styled.div`
	block-size: 5rem;
	aspect-ratio: 1/1;
	border: 1px solid var(--grey-2);
	border-radius: 50%;
	overflow: hidden;
	flex-shrink: 0;

	.profile__image {
		block-size: 100%;
		inline-size: 100%;
		object-fit: cover;
	}
`;

const ProfileAvatar = ({ image, alt }: ProfileAvatarProps) => {
	return (
		<ProfileAvatarStyled>
			<img className="profile__image" src={image} alt={alt} />
		</ProfileAvatarStyled>
	);
};

type ProfileAvatarProps = {
	image: string;
	alt: string;
};

export default ProfileAvatar;
