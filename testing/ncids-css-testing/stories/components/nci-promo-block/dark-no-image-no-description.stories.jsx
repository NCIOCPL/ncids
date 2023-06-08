import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-promo-block.scss';

// language=HTML
const html = `
<section class="usa-section" aria-labelledby="promoblock-title">
    <div class="grid-container">
        <div class="nci-promo-block nci-promo-block--dark">
            <div class="nci-promo-block__content">
                <h2 id="promoblock-title" class="nci-promo-block__heading">NCI Annual Plan & Budget Proposal for Fiscal Year 2024</h2>
                <a class="usa-button usa-button--secondary">
                  Learn More
                </a>
            </div>
        </div>
    </div>
</section>`;

export const DarkNoImageNoDescription = () => <TestCase css={css} html={html} />;
