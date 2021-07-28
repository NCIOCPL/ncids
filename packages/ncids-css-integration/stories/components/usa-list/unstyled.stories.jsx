import React from 'react';
import { TestCase } from '../../../components/test-case';
import sass from '!!raw-loader!sass-loader!./unstyled.scss';

export default {
	title: 'components/usa-list/unstyled',
	argTypes: {},
};

const html = `
<ul class="usa-list usa-list--unstyled">
	<li>item 1</li>
	<li>item 2</li>
</ul>
`;

export const Unstyled = () => <TestCase sass={sass} html={html} />;
