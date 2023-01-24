import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-section.scss';

const html = `
<div>
    <div class="usa-section" style="background-color: #f0f0f0; border: 1px solid black">
        <div style="background-color: white; border: 1px dashed black">Div (component) inside usa-section</div>
    </div>
    <div class="usa-section" style="background-color: #f0f0f0; border: 1px solid black">
        <div style="background-color: white; border: 1px dashed black">Div (component) inside usa-section</div>
    </div>
</div>
`;

export const Default = () => <TestCase css={css} html={html} />;
