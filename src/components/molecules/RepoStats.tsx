import styled from 'styled-components';
import StatItem from './items/StatItem';
import { STAR } from '../icons/S_icons';
import { BRANCH } from '../icons/B_icons';
import { Repo } from '../../interfaces/repo.interface';
import TechTag from '../atoms/TechTag';
import { timeSince } from '../../helpers/date.helper';

const RepoStatsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font: var(--caption-regular);
	margin-block-end: 1.5rem;

	.repo-stats__time {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	@media screen and (min-width: 768px) {
		margin-block-end: 0;
	}
`;

const RepoStats = ({ repo }: RepoStatsProps) => {
	const { forks, stargazers_count: stars, language, updated_at } = repo;

	return (
		<RepoStatsStyled>
			{language && <TechTag language={language} />}
			<StatItem icon={STAR} className="is-small">
				<span>{stars}</span>
			</StatItem>
			<StatItem icon={BRANCH} className="is-small">
				<span>{forks}</span>
			</StatItem>
			<span className="repo-stats__time">
				Updated {timeSince(updated_at)} ago
			</span>
		</RepoStatsStyled>
	);
};

type RepoStatsProps = {
	repo: Repo;
};

export default RepoStats;
