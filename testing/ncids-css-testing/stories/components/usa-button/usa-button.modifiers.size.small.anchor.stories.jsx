import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

export default {
	title: 'components/Button/Modifiers/Size/Small',
	argTypes: {},
};

const html = `
<div>
	<div class="section-header">Primary</div>
	<a href="#" class="usa-button usa-button--nci-small">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-focus">Focus</a>
</div>
<div>
	<div class="section-header">Secondary</div>
	<a href="#" class="usa-button usa-button--nci-small usa-button--secondary">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--secondary usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--secondary usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--secondary usa-focus">Focus</a>
</div>
<div>
	<div class="section-header">Accent Cool</div>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-cool">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-cool usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-cool usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-cool usa-focus">Focus</a>
</div>
<div>
	<div class="section-header">Accent Warm</div>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-warm">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-warm usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-warm usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--accent-warm usa-focus">Focus</a>
<div>
	<div class="section-header">Base</div>
	<a href="#" class="usa-button usa-button--nci-small usa-button--base">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--base usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--base usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--base usa-focus">Focus</a>
</div>
<div>
	<div class="section-header">Outline</div>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-focus">Focus</a>
</div>
<div class="section-header">Outline Inverse</div>
<div class="section-dark">
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--inverse">Button</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--inverse usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--inverse usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--nci-small usa-button--outline usa-button--inverse usa-focus">Focus</a>
</div>
`;

export const Anchor = () => <TestCase css={css} html={html} />;
