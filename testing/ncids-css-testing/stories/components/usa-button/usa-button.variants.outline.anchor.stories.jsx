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
    <a href="#" class="usa-button usa-button--outline">Button</a>
    <a href="#" class="usa-button usa-button--outline usa-button--hover">Hover</a>
    <a href="#" class="usa-button usa-button--outline usa-button--active">Active</a>
    <a href="#" class="usa-button usa-button--outline usa-focus">Focus</a>
</div>
<div>
    <div class="section-header">Secondary</div>
    <a href="#" class="usa-button usa-button--outline usa-button--secondary">Button</a>
    <a href="#" class="usa-button usa-button--outline usa-button--secondary usa-button--hover">Hover</a>
    <a href="#" class="usa-button usa-button--outline usa-button--secondary usa-button--active">Active</a>
    <a href="#" class="usa-button usa-button--outline usa-button--secondary usa-focus">Focus</a>
</div>
<div class="section-header">Outline Inverse</div>
<div class="section-dark">
	<a href="#" class="usa-button usa-button--outline usa-button--inverse">Button</a>
	<a href="#" class="usa-button usa-button--outline usa-button--inverse usa-button--hover">Hover</a>
	<a href="#" class="usa-button usa-button--outline usa-button--inverse usa-button--active">Active</a>
	<a href="#" class="usa-button usa-button--outline usa-button--inverse usa-focus">Focus</a>
</div>
`;

export const Anchor = () => <TestCase css={css} html={html} />;