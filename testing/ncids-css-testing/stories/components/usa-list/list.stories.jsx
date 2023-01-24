import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './list.scss';

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

export const Default = () => <TestCase css={css} html={html} />;
