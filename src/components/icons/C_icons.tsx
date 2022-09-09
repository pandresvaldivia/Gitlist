import { Icon } from './icon.class';

export const CANCEL = new Icon(
	'0 0 24 24',
	(
		<>
			<path
				d="M18 6L6 18"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 6L18 18"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	)
);

export const CHECK = new Icon(
	'0 0 24 24',
	(
		<>
			<path
				d="M20 6L9 17L4 12"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	)
);
