const cleanIntNumber = (value: string) => {
	return value.replace(/\.0$/, '');
};

export const abbreviateNumber = (value: number) => {
	if (value >= 1000000000) {
		return `${cleanIntNumber((value / 1000000000).toFixed(1))}B`;
	}
	if (value >= 1000000) {
		return `${cleanIntNumber((value / 1000000).toFixed(1))}M`;
	}
	if (value >= 1000) {
		return `${cleanIntNumber((value / 1000).toFixed(1))}K`;
	}
	return value;
};
