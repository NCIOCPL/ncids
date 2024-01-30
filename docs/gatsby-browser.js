import * as ncidsAutocomplete from '@nciocpl/ncids-js/nci-autocomplete';
import * as ncidsHeader from '@nciocpl/ncids-js/nci-header';
import * as ncidsFooter from '@nciocpl/ncids-js/usa-footer';
import * as ncidsSiteAlert from '@nciocpl/ncids-js/usa-site-alert';
import './src/index.scss';

// Note: The APIs wrapPageElement and wrapRootElement exist in both
// the browser and Server-Side Rendering (SSR) APIs. You generally should
// implement the same components in both gatsby-ssr.js and gatsby-browser.js
// so that pages generated through SSR are the same after being hydrated in the browser.
// Gatsby Docs: https://v3.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

export { default as wrapRootElement } from './src/components/layouts/wrap-root-element';

// Push the NCIDS components onto the window so that we can use them to initialize instances
// on our HTML examples. The name of this object should match whatever we end up using as
// the namespace for the CDN version of ncids-js.
window.ncids = {
	...ncidsAutocomplete,
	...ncidsHeader,
	...ncidsFooter,
	...ncidsSiteAlert,
};

// ugh
export class MockMegaMenuAdapter {
	async getMegaMenuContent(id) {
		const content = document.createElement('div');
		content.innerHTML =
			'<div id="megamenu-layer" class="nci-megamenu"><div class="grid-container"><div class="grid-row grid-gap"><div class="grid-col-3 nci-megamenu__primary-pane"><a class="nci-megamenu__primary-link" href="/">Explore Section</a></div><div class="nci-megamenu__items-pane grid-col-9"><div class="grid-row grid-gap"><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a class="nci-megamenu__list-item-link" href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a class="nci-megamenu__sublist-item-link" href="/">Navigationlink</a></li><li class="nci-megamenu__sublist-item"><a class="nci-megamenu__sublist-item-link" href="/">Navigationlink</a></li></ul></li></ul></div><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a href="/">A very long navigation link that goes onto twolines</a></li><li class="nci-megamenu__sublist-item"><a href="/">A very long navigation link that goes onto twolines</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li></ul></li></ul></div><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li></ul></li></ul></div></div><div class="grid-row grid-gap"><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">A very long navigation link that goes onto twolines</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li></ul></li></ul></div><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li></ul></li></ul></div><div class="grid-col-4"><ul class="nci-megamenu__list"><li class="nci-megamenu__list-item"><a href="/">Section Header</a><ul class="nci-megamenu__sublist"><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">Navigation link</a></li><li class="nci-megamenu__sublist-item"><a href="/">A very long navigation link that goes onto twolines</a></li></ul></li></ul></div></div></div></div></div></div>';
		content.setAttribute('data-testid', id);
		return content;
	}
}

window.adapter = new MockMegaMenuAdapter(true);
