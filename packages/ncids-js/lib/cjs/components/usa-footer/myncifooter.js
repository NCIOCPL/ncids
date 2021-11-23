'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MyNCIFooter = void 0;
const nci_footer_component_1 = require('./nci-footer.component');
class MyNCIFooter extends nci_footer_component_1.NCIFooter {
	constructor(element, options) {
		console.log('MyNCIFooter constructor');
		super(element, options);
	}
}
exports.MyNCIFooter = MyNCIFooter;
