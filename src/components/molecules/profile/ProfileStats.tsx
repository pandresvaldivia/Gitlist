import styled from 'styled-components';
import { useAppContext } from '../../../contexts/App.context';
import { USER } from '../../icons/U_icons';
import { abbreviateNumber } from '../../../helpers/number.helper';
import { STAR } from '../../icons/S_icons';
import StatItem from '../items/StatItem';

const ProfileStatsStyled = styled.div`
	.stats__list {
		display: flex;
		list-style: none;
		padding-inline-start: 0;
		margin: 0;
		margin-block-end: 1.5rem;
	}

	.stats__bio,
	.stats__amount,
	.stats__separator {
		color: var(--grey-2);
	}

	.stats__bio {
		margin: 0;
		margin-block-end: 1rem;
	}

	.stats__amount {
		font: var(--body2-semibold);
	}

	.stats__separator {
		margin-inline: 0.75rem;
	}
`;

const ProfileStats = ({}: ProfileStatsProps) => {
	const { user } = useAppContext();
	const { followers, following, bio } = user;

	return (
		<ProfileStatsStyled>
			<p className="stats__bio">{bio}</p>
			<ul className="stats__list">
				<StatItem icon={USER}>
					<span className="stats__amount">{abbreviateNumber(followers)}</span>{' '}
					Followers
					<span className="stats__separator">•</span>
					<span className="stats__amount">
						{abbreviateNumber(following)}
					</span>{' '}
					Following
					<span className="stats__separator">•</span>
				</StatItem>
				<StatItem icon={STAR}>80</StatItem>
			</ul>
		</ProfileStatsStyled>
	);
};

type ProfileStatsProps = {};

export default ProfileStats;
