import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-section.scss';

const html = `
<section class="usa-section">
    <div class="grid-container">
        <h2>A default section</h2>
        <p>The section component visually separates your content from other parts of the page.</p>
    </div>
</section>
`;

export const Default = () => <TestCase css={css} html={html} />;
