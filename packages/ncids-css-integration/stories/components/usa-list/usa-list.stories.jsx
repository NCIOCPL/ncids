import React from 'react';
import { TestCase } from '../../../components/test-case';
import sass from '!!raw-loader!sass-loader!./usa-list.scss';

export default {
	title: 'components/usa-list/usa-list',
	argTypes: {},
};

const html = `
<ul class="usa-list">
	<li>item 1</li>
	<li>item 2</li>
</ul>

<ol class="usa-list">
	<li>item 1</li>
	<li>item 2</li>
</ol>
`;

export const Default = () => <TestCase sass={sass} html={html} />;
