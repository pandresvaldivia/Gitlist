import { TIMELINE_IMAGES } from '../constants/timeline.constant';

export const getRandomChart = () => {
	const randomIndex = Math.floor(Math.random() * TIMELINE_IMAGES.length);

	return TIMELINE_IMAGES[randomIndex];
};
