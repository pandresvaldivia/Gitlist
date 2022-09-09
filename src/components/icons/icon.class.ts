import { ReactNode } from 'react';

export class Icon {
	public vb: string;
	public code: ReactNode | HTMLElement;

	constructor(vb: string, code: ReactNode | HTMLElement) {
		this.vb = vb;
		this.code = code;
	}
}
