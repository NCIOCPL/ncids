import { NCIFooter } from './nci-footer.component';

export class MyNCIFooter extends NCIFooter {
	constructor(element: HTMLElement) {
		console.log('MyNCIFooter constructor');
		super(element);
	}
}
