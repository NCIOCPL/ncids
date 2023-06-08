import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-promo-block.scss';

import img_promo_16x9 from './img/promo-16x9.jpg';
import img_promo_1x1 from './img/promo-1x1.jpg';

// language=HTML
const html = `
<section class="usa-section usa-section--light" aria-labelledby="promoblock-title">
    <div class="grid-container">
        <div class="nci-promo-block nci-promo-block--with-image">
            <picture class="nci-promo-block__image">
                <source
                    media="(min-width: 880px)"
                    srcset="${img_promo_1x1}"
                />
                <img src="${img_promo_16x9}" alt="Promoblock Image Text"/>
            </picture>
            <div class="nci-promo-block__content">
                <h2 id="promoblock-title" class="nci-promo-block__heading">NCI Equity and Inclusion Program</h2>
                <p class="nci-promo-block__text">NCI is committed to ending structural racism in biomedical research and supports the National Institutes of Health's UNITE initiative.</p>
                <a class="usa-button usa-button--secondary">Learn More</a>
            </div>
        </div>
    </div>
</section>`;

export const LightWithImage = () => <TestCase css={css} html={html} />;
