import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

export default {
	title: 'components/Button/Modifiers/FullWidth',
	argTypes: {},
};

const html = `
<div>
	<div class="section-header">Primary</div>
	<button class="usa-button usa-button--nci-full-width ">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width " disabled>Disabled</button>
</div>
<div>
	<div class="section-header">Secondary</div>
	<button class="usa-button usa-button--nci-full-width usa-button--secondary">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--secondary usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--secondary usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--secondary usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--secondary" disabled>Disabled</button>
</div>
<div>
	<div class="section-header">Accent Cool</div>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-cool">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-cool usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-cool usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-cool usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-cool" disabled>Disabled</button>
</div>
<div>
	<div class="section-header">Accent Warm</div>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-warm">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-warm usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-warm usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-warm usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--accent-warm" disabled>Disabled</button>
</div>
<div>
	<div class="section-header">Base</div>
	<button class="usa-button usa-button--nci-full-width usa-button--base">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--base usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--base usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--base usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--base" disabled>Disabled</button>
</div>
<div>
	<div class="section-header">Outline</div>
	<button class="usa-button usa-button--nci-full-width usa-button--outline">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline" disabled>Disabled</button>
</div>
<div class="section-header">Outline Inverse</div>
<div class="section-dark">
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--inverse">Button</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--inverse usa-button--hover">Hover</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--inverse usa-button--active">Active</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--inverse usa-focus">Focus</button>
	<button class="usa-button usa-button--nci-full-width usa-button--outline usa-button--inverse" disabled>Disabled</button>
</div>
`;

export const Button = () => <TestCase css={css} html={html} />;
