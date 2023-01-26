import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './unstyled.scss';

const html = `
<ul class="usa-list usa-list--unstyled">
	<li>item 1</li>
	<li>item 2</li>
</ul>
`;

export const Unstyled = () => <TestCase css={css} html={html} />;
