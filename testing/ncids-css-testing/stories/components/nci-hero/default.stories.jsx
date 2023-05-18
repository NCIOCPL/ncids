import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-hero.scss';

import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widerscreen from './img/hero-widescreen.jpg';

// language=HTML
const html = `
<section aria-labelledby="nci-hero-text">
    <div class="nci-hero text-center">
        <picture class="nci-hero__image">
            <source media="(min-width: 1024px)" srcset="${img_hero_widerscreen}" />
            <source media="(min-width: 880px)" srcset="${img_hero_desktop}" />
            <source media="(min-width: 640px)" srcset="${img_hero_tablet_lg}" />
            <source media="(min-width: 480px)" srcset="${img_hero_tablet}" />
            <source media="(min-width: 320px)" srcset="${img_hero_mobile_lg}" />
            <img src="${img_hero_mobile}" alt="" />
        </picture>
        <div class="nci-hero__cta-container">
            <div class="nci-hero__cta padding-6">
                <h2 class="nci-hero__cta-tagline" id="nci-hero-text">
                    NCI is the nation's leader in cancer research.
                </h2>
            </div>
        </div>
    </div>
</section>
`;

export const Default = () => <TestCase css={css} html={html} />;
