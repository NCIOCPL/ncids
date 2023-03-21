import { render, screen } from '@testing-library/react';
import React from 'react';
import TopNavigation from '../TopNavigation';

const navData = [
	{
		title: 'NCI Design System Home',
		section: 'home',
		name: 'Home',
		url: '',
		children: [
			{
				title: 'NCI Design System Home',
				section: 'home',
				name: 'Home',
				url: 'index',
			},
		],
	},
	{
		title: 'About the NCI Design System',
		section: 'about',
		name: 'About NCIDS',
		url: 'about/',
		children: [
			{
				title: 'About the NCI Design System',
				section: 'about',
				name: 'About NCIDS',
				url: 'about/index',
			},
		],
	},
	{
		title: 'Components - NCI Design System',
		section: 'components',
		name: 'Components',
		url: 'components/',
		children: [
			{
				title: 'Autocomplete Component - NCI Design System',
				section: 'components',
				name: 'Autocomplete',
				url: 'components/autocomplete',
			},
			{
				title: 'Banner Component - NCI Design System',
				section: 'components',
				name: 'Banner',
				url: 'components/banner',
			},
			{
				title: 'Breadcrumb Component - NCI Design System',
				section: 'components',
				name: 'Breadcrumb',
				url: 'components/breadcrumb',
			},
			{
				title: 'Button Component - NCI Design System',
				section: 'components',
				name: 'Button',
				url: 'components/button',
			},
			{
				title: 'CTA Strip Component - NCI Design System',
				section: 'components',
				name: 'CTA',
				url: 'components/cta-strip',
			},
			{
				title: 'Components - NCI Design System',
				section: 'components',
				name: 'Components',
				url: 'components/index',
			},
			{
				title: 'Feature Card Row (3 Cards) - NCI Design System',
				section: 'components',
				name: 'Feature Card',
				url: 'components/feature-card',
			},
			{
				title: 'Feature Card Row (3 Cards) - NCI Design System',
				section: 'components',
				name: 'Feature Card Row',
				url: 'components/feature-card-row',
			},
			{
				title: 'Footer Component - NCI Design System',
				section: 'components',
				name: 'Footer',
				url: 'components/footer',
			},
			{
				title: 'Guide Card Row (3 Cards) - NCI Design System',
				section: 'components',
				name: 'Guide Card',
				url: 'components/guide-card-row',
			},
			{
				title:
					'Guide Card with Image and Description Row (2 Cards) - NCI Design System',
				section: 'components',
				name: 'Guide Card with Image and Description',
				url: 'components/guide-card-with-image-and-description',
			},
			{
				title: 'Header Extended with MegaMenu Component - NCI Design System',
				section: 'components',
				name: 'Header',
				url: 'components/header',
			},
			{
				title: 'NCI Hero Component - NCI Design System',
				section: 'components',
				name: 'Hero',
				url: 'components/nci-hero',
			},
			{
				title: 'Icons - NCI Design System',
				section: 'components',
				name: 'Icons',
				url: 'components/icons',
			},
			{
				title: 'List Component - NCI Design System',
				section: 'components',
				name: 'List',
				url: 'components/list',
			},
			{
				title: 'Promoblock Component - NCI Design System',
				section: 'components',
				name: 'Promoblock',
				url: 'components/promoblock',
			},
			{
				title: 'Side Navigation Component - NCI Design System',
				section: 'components',
				name: 'Side Navigation',
				url: 'components/sidenav',
			},
			{
				title: 'Site Alert Component - NCI Design System',
				section: 'components',
				name: 'Site Alert',
				url: 'components/site-alert',
			},
			{
				title: 'Skipnav Component - NCI Design System',
				section: 'components',
				name: 'Skipnav',
				url: 'components/skipnav',
			},
			{
				title: 'Subscribe Component - NCI Design System',
				section: 'components',
				name: 'Subscribe',
				url: 'components/subscribe',
			},
		],
	},
	{
		title: 'NCI Design System Tokens',
		section: 'design-tokens',
		name: 'Design Tokens',
		url: 'design-tokens/',
		children: [
			{
				title: 'NCI Design System Box Shadow',
				section: 'design-tokens',
				name: 'Box Shadow',
				url: 'design-tokens/properties/shadow',
			},
			{
				title: 'NCI Design System Tokens',
				section: 'design-tokens',
				name: 'Design Tokens',
				url: 'design-tokens/index',
			},
			{
				title: 'NCI Design System Font Tokens',
				section: 'design-tokens',
				name: 'Font Tokens',
				url: 'design-tokens/typography/fonts',
			},
			{
				title: 'NCI Design State Tokens',
				section: 'design-tokens',
				name: 'State Tokens',
				url: 'design-tokens/state-tokens',
			},
			{
				title: 'NCI Design System Tokens',
				section: 'design-tokens',
				name: 'System Tokens',
				url: 'design-tokens/system-tokens',
			},
			{
				title: 'NCI Design System Theme Tokens',
				section: 'design-tokens',
				name: 'Theme Tokens',
				url: 'design-tokens/theme-tokens',
			},
		],
	},
	{
		title: 'NCI Design System - Development',
		section: 'development',
		name: 'Development',
		url: 'about/development/',
		children: [
			{
				title: 'NCI Design System - Development',
				section: 'development',
				name: 'Development',
				url: 'about/development/index',
			},
			{
				title: 'Using Code Examples - NCI Design System',
				section: 'development',
				name: 'code examples',
				url: 'about/development/code-examples',
			},
		],
	},
];

const pageData = {
	title: 'NCI Design System Tokens',
	section: 'design-tokens',
	name: 'Design Tokens',
	url: 'design-tokens/index',
};

describe('Top Navigation', () => {
	it('renders the color correctly', () => {
		render(<TopNavigation data={navData} page={pageData} />);

		const aboutLabel = screen.getByText('About NCIDS');
		expect(aboutLabel).toBeInTheDocument();
	});
});
