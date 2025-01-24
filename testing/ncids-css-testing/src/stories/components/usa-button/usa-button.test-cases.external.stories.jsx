import Component from './content/button.twig';
import css from './index.scss?inline';
import iconSvgAlternate from './svg-icon-alternate';

export default {
	title: 'components/Button/Test Cases',
	component: Component,
	parameters: {css}
};

export const ExternalIcons = {
	args: { buttons: [
			{
				title: 'Automatic External Link',
				class: '',
				link_address: 'https://www.google.com',
			},
			{
				title: 'External Link Displayed as Internal',
				class: '',
				link_address: 'https://www.google.com',
				linkMarkedInternal: 'data-ncids-internal-link'
			},
			{
				title: 'Internal Link Displayed as External',
				class: 'usa-button--external',
				link_address: 'https://www.cancer.gov',
			},
			{
				title: 'Full Width External Link',
				class: 'usa-button--nci-full-width',
				link_address: 'https://www.google.com',
			},
			{
				title: 'Icon Left with External Link',
				class: 'usa-button--nci-icon',
				link_address: 'https://www.google.com',
				iconSvg: iconSvgAlternate,
			},
			{
				title: 'Icon Right with External Link',
				class: 'usa-button--nci-icon-right',
				link_address: 'https://www.google.com',
				iconSvg: iconSvgAlternate,
			},
			{
				title: 'Big Button with External Link',
				class: 'usa-button--big',
				link_address: 'https://www.google.com',
			},
			{
				title: 'Small Button with External Link',
				class: 'usa-button--nci-small',
				link_address: 'https://www.google.com',
			},
			{
				title: 'Outlined Button with External Link',
				class: 'usa-button--outline',
				link_address: 'https://www.google.com',
			},
			{
				title: 'Unstyled Button with External Link',
				class: 'usa-button--unstyled',
				link_address: 'https://www.google.com',
			},
		] }
};
