import { TECHNOLOGY_COLORS } from '../constants/technology.helper';
export const getTechnologyColor = (technology: string) => {
	if (!technology) return '#ffffff';

	return TECHNOLOGY_COLORS[technology.toLowerCase()];
};
