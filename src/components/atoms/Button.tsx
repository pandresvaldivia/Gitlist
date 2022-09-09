import styled from 'styled-components';
import { Icon as IconClass } from '../icons/icon.class';
import Icon from './Icon';

const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 0.5rem;
	border-radius: 0.5rem;
	color: var(--white);
	font: var(--button);
	background: var(--black-btn);
	border: 1px solid var(--grey);
	padding-block: 0.25rem;
	padding-inline: 1.5rem;
`;

const Button = ({ text, icon, iconColor, onClick }: ButtonProps) => {
	return (
		<ButtonStyled onClick={onClick}>
			{icon && <Icon icon={icon} stroke={iconColor} />}
			<span>{text}</span>
		</ButtonStyled>
	);
};

type ButtonProps = {
	text: string;
	icon?: IconClass;
	iconColor?: string;
	onClick?: () => void;
};

export default Button;
