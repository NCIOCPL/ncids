import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

const iconSvg = `
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width="24"
	class="usa-icon"
	role="img"
	aria-labelledby="facebook-title_site">
	<title id="facebook-title_site">Facebook</title>
	<rect fill="none" height="24" width="24" />
	<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
</svg>
`;

export default {
	title: 'components/Button/Modifiers/Icon/Left',
	argTypes: {},
};

const html = `
<div>
	<div class="section-header">Primary</div>
	<button class="usa-button usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div>
	<div class="section-header">Secondary</div>
	<button class="usa-button usa-button--secondary usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--secondary usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--secondary usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--secondary usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--secondary usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div>
	<div class="section-header">Accent Cool</div>
	<button class="usa-button usa-button--accent-cool usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--accent-cool usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--accent-cool usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--accent-cool usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--accent-cool usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div>
	<div class="section-header">Accent Warm</div>
	<button class="usa-button usa-button--accent-warm usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--accent-warm usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--accent-warm usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--accent-warm usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--accent-warm usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div>
	<div class="section-header">Base</div>
	<button class="usa-button usa-button--base usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--base usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--base usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--base usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--base usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div>
	<div class="section-header">Outline</div>
	<button class="usa-button usa-button--outline usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--outline usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--outline usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--outline usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--outline usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
<div class="section-header">Outline Inverse</div>
<div class="section-dark">
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--nci-icon">${iconSvg}<span>Icon Left</span></button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--nci-icon usa-button--hover">${iconSvg}<span>Hover</span></button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--nci-icon usa-button--active">${iconSvg}<span>Active</span></button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--nci-icon usa-focus">${iconSvg}<span>Focus</span></button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--nci-icon" disabled>${iconSvg}<span>Disabled</span></button>
</div>
`;

export const Button = () => <TestCase css={css} html={html} />;
