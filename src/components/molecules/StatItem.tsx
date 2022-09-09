import { ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import { Icon as IconClass } from '../icons/icon.class';

const StatItemStyled = styled.li`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font: var(--body2-regular);

	a {
		color: var(--grey-2);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
`;

const StatItem = ({ icon, children }: StatItemProps) => {
	return (
		<StatItemStyled>
			<Icon icon={icon} size="1.5rem" />
			<span>{children}</span>
		</StatItemStyled>
	);
};

type StatItemProps = {
	icon: IconClass;
	children?: ReactNode;
};

export default StatItem;
