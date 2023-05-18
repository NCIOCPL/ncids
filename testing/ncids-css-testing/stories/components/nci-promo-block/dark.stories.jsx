import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-promo-block.scss';

// language=HTML
const html = `
<section class="usa-section usa-section--light" aria-labelledby="promoblock-title">
    <div class="grid-container">
        <div class="nci-promo-block nci-promo-block--dark">
            <div class="nci-promo-block__content">
                <h2 id="promoblock-title" class="nci-promo-block__heading">NCI Annual Plan & Budget Proposal for Fiscal Year 2024</h2>
                <p class="nci-promo-block__text">NCI's research strategy supports investigator-initiated research 
                  and maximizes opportunities in emerging areas of science. The FY 2024 Annual Plan & Budget Proposal 
                  aligns with NCI's vision and supports cancer research.
                </p>
                <a class="usa-button usa-button--secondary">
                  Learn More<span class="usa-sr-only"> about the NCI Annual Plan</span>
                </a>
            </div>
        </div>
    </div>
</section>`;

export const Dark = () => <TestCase css={css} html={html} />;
