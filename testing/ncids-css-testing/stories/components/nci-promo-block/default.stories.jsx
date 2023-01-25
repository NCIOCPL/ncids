import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-promo-block.scss';

// language=HTML
const html = `
<section label="Promoblock No Image" class="usa-section usa-section--light">
    <div class="grid-container">
        <div class="nci-promo-block nci-promo-block--dark">
            <div class="nci-promo-block__content">
                <h2 class="nci-promo-block__heading">NCI Annual Plan & Budget Proposal for Fiscal Year 2024</h2>
                <p class="nci-promo-block__text">NCI's research strategy supports investigator-initiated research and maximizes opportunities in emerging areas of science. The FY 2024 Annual Plan & Budget Proposal aligns with NCI's vision and supports cancer research.</p>
                <button class="usa-button usa-button--secondary">Learn More</button>
            </div>
        </div>
    </div>
</section>`;

export const Default = () => <TestCase css={css} html={html} />;
