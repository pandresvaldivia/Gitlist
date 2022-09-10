import styled from 'styled-components';
import { getRandomChart } from '../../helpers/charts.helper';
import StarButton from '../atoms/StarButton';

const RepoActionsStyled = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	.repo-action__timeline {
		inline-size: 8.875rem;
	}

	@media screen and (min-width: 768px) {
		flex-direction: column;

		.repo-action__timeline {
			inline-size: 17.3125rem;
		}
	}
`;

const RepoActions = ({}: RepoActionsProps) => {
	return (
		<RepoActionsStyled>
			<StarButton />
			<img
				className="repo-action__timeline"
				src={getRandomChart()}
				alt="Timeline"
			/>
		</RepoActionsStyled>
	);
};

type RepoActionsProps = {};

export default RepoActions;
