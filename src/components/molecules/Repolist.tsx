import styled from 'styled-components';
import useGetRepos from '../../hooks/useGetRepos';
import RepoItem from './items/RepoItem';

const RepolistStyled = styled.div`
	grid-area: repolist;
`;

const Repolist = ({}: RepolistProps) => {
	const { repos, isLoading } = useGetRepos();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<RepolistStyled>
			{repos.map((repo) => (
				<RepoItem key={repo.name} repo={repo} />
			))}
		</RepolistStyled>
	);
};

type RepolistProps = {};

export default Repolist;
