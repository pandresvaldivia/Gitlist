import styled from 'styled-components';
import { isArrayEmpty } from '../../../helpers/array.helper';
import { Repo } from '../../../interfaces/repo.interface';
import Tag from '../../atoms/Tag';
import RepoActions from '../RepoActions';
import RepoStats from '../RepoStats';
import RepoTitle from '../RepoTitle';

const RepoItemStyled = styled.article`
	width: 100%;
	padding-block-end: 2rem;
	margin-block-end: 2rem;
	position: relative;

	.repo-item__topics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin-block-end: 1.5rem;
	}

	.repo-item__description {
		font: var(--body2-regular);
		letter-spacing: 0.075rem;
		margin-block-end: 1rem;
	}

	&:not(:last-of-type)::before {
		content: '';
		position: absolute;
		background: var(--grey);
		block-size: 1px;
		inline-size: 100%;
		bottom: 0;
		opacity: 0.2;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

const RepoItem = ({ repo }: RepoItemProps) => {
	const { name, description, visibility, topics, html_url: link } = repo;

	return (
		<RepoItemStyled>
			<div>
				<RepoTitle title={name} visibility={visibility} link={link} />

				<p className="repo-item__description">{description}</p>

				{!isArrayEmpty(topics) && (
					<div className="repo-item__topics">
						{topics.map((topic, index) => (
							<Tag key={`topic-${index}`} topic={topic} />
						))}
					</div>
				)}
				<RepoStats repo={repo} />
			</div>
			<RepoActions />
		</RepoItemStyled>
	);
};

type RepoItemProps = {
	repo: Repo;
};

export default RepoItem;
