import styled from 'styled-components';
import Badge from '../atoms/Badge';

const RepoTitleStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	.repo-list__title,
	.repo-list__title a {
		color: var(--primary);
	}

	.repo-list__title {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font: var(--headline2-semibold);
		margin: 0;
	}
`;

const RepoTitle = ({ title, visibility, link }: RepoTitleProps) => {
	return (
		<RepoTitleStyled>
			<h2 className="repo-list__title">
				<a href={link} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			</h2>
			<Badge text={visibility} />
		</RepoTitleStyled>
	);
};

type RepoTitleProps = {
	title: string;
	visibility: string;
	link: string;
};

export default RepoTitle;
