import { TIME_UNITS } from '../constants/date.constant';

export const timeSince = (updateDate: string) => {
	const date = new Date(updateDate);

	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

	let interval = Math.floor(seconds / TIME_UNITS.year);
	if (interval > 1) {
		return `${interval} years`;
	}

	interval = Math.floor(seconds / TIME_UNITS.month);
	if (interval > 1) {
		return `${interval} months`;
	}

	interval = Math.floor(seconds / TIME_UNITS.day);
	if (interval > 1) {
		return `${interval} days`;
	}

	interval = Math.floor(seconds / TIME_UNITS.hour);
	if (interval > 1) {
		return `${interval} hours`;
	}

	interval = Math.floor(seconds / TIME_UNITS.minute);
	if (interval > 1) {
		return `${interval} minutes`;
	}

	return Math.floor(seconds) + ' seconds';
};
