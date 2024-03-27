import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';

export default {
	title: 'components/Button/Variants/Outline',
	argTypes: {},
};

const html = `
<div>
	<div class="section-header">Primary</div>
    <button class="usa-button usa-button--outline">Button</button>
    <button class="usa-button usa-button--outline usa-button--hover">Hover</button>
    <button class="usa-button usa-button--outline usa-button--active">Active</button>
    <button class="usa-button usa-button--outline usa-focus">Focus</button>
    <button class="usa-button usa-button--outline" disabled>Disabled</button>
</div>
<div>
    <div class="section-header">Secondary</div>
    <button class="usa-button usa-button--outline usa-button--secondary">Button</button>
    <button class="usa-button usa-button--outline usa-button--secondary usa-button--hover">Hover</button>
    <button class="usa-button usa-button--outline usa-button--secondary usa-button--active">Active</button>
    <button class="usa-button usa-button--outline usa-button--secondary usa-focus">Focus</button>
    <button class="usa-button usa-button--outline usa-button--secondary" disabled>Disabled</button>
</div>

<div class="section-header">Outline Inverse</div>
<div class="section-dark">
	<button class="usa-button usa-button--outline usa-button--inverse">Button</button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--hover">Hover</button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-button--active">Active</button>
	<button class="usa-button usa-button--outline usa-button--inverse usa-focus">Focus</button>
	<button class="usa-button usa-button--outline usa-button--inverse" disabled>Disabled</button>
</div>
`;

export const Button = () => <TestCase css={css} html={html} />;