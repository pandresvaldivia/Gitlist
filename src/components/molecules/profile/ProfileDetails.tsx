import styled from 'styled-components';
import { getTwitterUrl } from '../../../helpers/string.helper';
import { useAppContext } from '../../../contexts/App.context';
import { LINK, LOCATION } from '../../icons/L_icons';
import { TWITTER } from '../../icons/T_icons';
import StatItem from '../items/StatItem';

const ProfileDetailsStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style: none;
	padding-inline-start: 0;
	margin: 0;
	margin-block-end: 1.5rem;
`;

const ProfileDetails = ({}: ProfileDetailsProps) => {
	const { user } = useAppContext();
	const { html_url: url, location, twitter_username: twitter } = user;

	return (
		<ProfileDetailsStyled>
			<StatItem icon={LOCATION}>{location}</StatItem>
			<StatItem icon={LINK}>
				<a href={url} target="_blank" rel="noreferrer noopener">
					{url}
				</a>
			</StatItem>
			<StatItem icon={TWITTER}>
				<a
					href={getTwitterUrl(twitter)}
					target="_blank"
					rel="noreferrer noopener"
				>
					{twitter}
				</a>
			</StatItem>
		</ProfileDetailsStyled>
	);
};

type ProfileDetailsProps = {};

export default ProfileDetails;
