import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-section.scss';

const html = `
<section class="usa-section usa-section--dark">
    <div class="grid-container">
        <h2>A dark section</h2>
        <p>The section component visually separates your content from other parts of the page with a dark background.</p>
    </div>
</section>
`;

export const SectionDark = () => <TestCase css={css} html={html} />;
