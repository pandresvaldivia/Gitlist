import { ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import { Icon as IconClass } from '../../icons/icon.class';

const StatItemStyled = styled.li`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font: var(--body2-regular);

	a,
	span {
		color: var(--grey-2);
	}

	a:hover {
		text-decoration: underline;
	}

	&.is-small {
		font: var(--caption-regular);
	}
`;

const StatItem = ({ icon, children, className = '' }: StatItemProps) => {
	return (
		<StatItemStyled className={className}>
			<Icon icon={icon} size="1.65em" />
			<span>{children}</span>
		</StatItemStyled>
	);
};

type StatItemProps = {
	icon: IconClass;
	children?: ReactNode;
	className?: string;
};

export default StatItem;
