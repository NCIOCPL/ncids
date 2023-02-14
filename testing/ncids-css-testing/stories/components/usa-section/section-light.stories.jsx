import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-section.scss';

const html = `
<section class="usa-section usa-section--light">
    <div class="grid-container">
        <h2>A light section</h2>
        <p>The section component visually separates your content from other parts of the page with a light background.</p>
    </div>
</section>
`;

export const SectionLight = () => <TestCase css={css} html={html} />;
