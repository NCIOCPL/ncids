import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-card.scss';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_1x1 from './img/news1-1x1.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_1x1 from './img/news2-1x1.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';

import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_1x1 from './img/news3-1x1.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

// language=HTML
const html = `
  <div class="grid-container">
    <div class="usa-prose">
      <p>
        The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance.
      </p>
      <div class="nci-card float-right tablet-lg:grid-col-4 margin-bottom-5 tablet:margin-bottom-4 desktop:margin-x-5 ">
        <a href="https://www.cancer.gov" aria-label="Feature Card">
          <picture class="nci-card__image">
            <source
              media="(min-width: 880px)"
              srcset="${img_news1_4x3}"
            />
            <img src="${img_news1_16x9}" />
          </picture>
          <div class="nci-card__body">
            <h2 class="nci-card__title">CRCHD Diversity Training</h2>
            <p class="nci-card__description">
              Treatment for severe COVID-19 with interferons decreased the
              viral load of SARS-CoV-2, a new study found.
            </p>
          </div>
        </a>
      </div>
      <p>
        The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance. The particulars of your body copy will be determined by the topic of
        your page. Regardless of topic, it's a good practice to follow the
        inverted pyramid structure when writing copy: Begin with the
        information that's most important to your users and then present
        information of less importance.
      </p>
    </div>
  </div>
`;

export const CardInTextRight = () => (
	<TestCase css={css} html={html} />
);
