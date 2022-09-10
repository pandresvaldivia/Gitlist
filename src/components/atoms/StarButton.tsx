import { useState } from 'react';
import styled from 'styled-components';
import { STAR } from '../icons/S_icons';
import Icon from './Icon';

const StarButtonStyled = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);
	border-radius: 0.5rem;
	padding-block: 0.5rem;
	padding-inline: 0.5rem 1rem;
	background: var(--black-btn);
	font: var(--body2-semibold);
	letter-spacing: 0.075rem;
	border: none;
	cursor: pointer;
`;

const StarButton = ({}: StarButtonProps) => {
	const [isStarred, setIsStarred] = useState(false);

	const handleStarred = () => {
		setIsStarred(!isStarred);
	};

	return (
		<StarButtonStyled onClick={handleStarred}>
			<Icon
				icon={STAR}
				stroke={isStarred ? '#e3b341' : '#8B949E'}
				color={isStarred ? '#e3b341' : 'none'}
				size="1.5em"
			/>
			<span>{isStarred ? 'Starred' : 'Star'}</span>
		</StarButtonStyled>
	);
};

type StarButtonProps = {};

export default StarButton;
