import { memo, ReactNode } from 'react';
import { Icon as IconClass } from '../icons/icon.class';

const Icon = memo(
	({
		icon,
		size = '1em',
		color = 'none',
		stroke = 'currentColor',
	}: IconProps) => {
		return (
			<svg
				width={size}
				height={size}
				viewBox={icon.vb}
				fill={color}
				stroke={stroke}
				xmlns="http://www.w3.org/2000/svg"
			>
				{icon && (icon.code as ReactNode)}
			</svg>
		);
	}
);

type IconProps = {
	icon: IconClass;
	size?: string;
	color?: string;
	stroke?: string;
};

export default Icon;
