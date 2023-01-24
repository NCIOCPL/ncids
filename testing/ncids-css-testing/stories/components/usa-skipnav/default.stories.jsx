import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-skipnav.scss';

const html = `
	<a class="usa-skipnav" href="#main-content">Skip to main content</a>
	<div style='background-color: #bdbdbd; min-height: 100px;width: 100%;'>Navigation Placeholder</div>
	<div id="main-content" role="main">Main Page Content</div>
`;

export const Default = () => <TestCase css={css} html={html} />;
