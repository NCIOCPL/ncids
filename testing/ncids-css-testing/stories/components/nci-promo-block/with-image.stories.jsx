import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-promo-block.scss';

import img_promo_16x9 from './img/promo-16x9.jpg';
import img_promo_1x1 from './img/promo-1x1.jpg';

// language=HTML
const html = `
<section label="Alternating Promoblock With Image" class="usa-section usa-section--light">
    <div class="grid-container">
        <div class="nci-promo-block nci-promo-block--with-image nci-promo-block--dark">
            <a class="nci-promo-block__image" href="https://www.google.com">
                <picture>
                    <source
                        media="(min-width: 880px)"
                        srcset="${img_promo_1x1}"
                    />
                    <img src="${img_promo_16x9}" />
                </picture>
            </a>
            <div class="nci-promo-block__content">
                <h2 class="nci-promo-block__heading">NCI Equity and Inclusion Program</h2>
                <p class="nci-promo-block__text">NCI is committed to ending structural racism in biomedical research and supports the National Institutes of Health's UNITE initiative.</p>
                <button class="usa-button usa-button--secondary">Learn More</button>
            </div>
        </div>
    </div>
</section>`;

export const WithImage = () => <TestCase css={css} html={html} />;
