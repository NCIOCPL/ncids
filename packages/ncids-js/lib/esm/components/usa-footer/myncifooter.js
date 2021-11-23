import { NCIFooter } from './nci-footer.component';
export class MyNCIFooter extends NCIFooter {
	constructor(element, options) {
		console.log('MyNCIFooter constructor');
		super(element, options);
	}
}
