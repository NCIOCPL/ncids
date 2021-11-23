import { FooterOptions, NCIFooter } from './nci-footer.component';

export class MyNCIFooter extends NCIFooter {
	constructor(element: HTMLElement, options?: FooterOptions) {
		console.log('MyNCIFooter constructor');
		super(element, options);
	}
}
