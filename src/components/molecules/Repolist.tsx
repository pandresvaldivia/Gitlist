import styled from 'styled-components';
import useGetRepos from '../../hooks/useGetRepos';

const RepolistStyled = styled.div`
	grid-area: repolist;
	background: blue;
`;

const Repolist = ({}: RepolistProps) => {
	const { repos, isLoading } = useGetRepos();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	console.log(repos);

	return <RepolistStyled>repolist</RepolistStyled>;
};

type RepolistProps = {};

export default Repolist;
