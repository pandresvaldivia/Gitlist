import styled from 'styled-components';

const BadgeStyled = styled.span`
	font: var(--caption-regular);
	padding-inline: 0.5rem;
	padding-block: 0.125rem;
	border: 1px solid var(--grey);
	border-radius: 0.5rem;
`;

const Badge = ({ text }: BadgeProps) => {
	return <BadgeStyled>{text}</BadgeStyled>;
};

type BadgeProps = {
	text: string;
};

export default Badge;
