import styled from 'styled-components';
import { getTechnologyColor } from '../../helpers/technology.helper';

const TechTagStyled = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	.tech-tag__color {
		display: inline-block;
		block-size: 1rem;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}
`;

const TechTag = ({ language }: TechTagProps) => {
	const techColor = getTechnologyColor(language);

	return (
		<TechTagStyled>
			<span className="tech-tag__color" style={{ background: techColor }} />
			<span>{language}</span>
		</TechTagStyled>
	);
};

type TechTagProps = {
	language: string;
};

export default TechTag;
