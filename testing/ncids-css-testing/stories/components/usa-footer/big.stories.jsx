import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './big.scss';

const html = `
<footer class="usa-footer usa-footer--big">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-8">
          <nav class="usa-footer__nav" aria-label="Footer navigation,,">
            <div class="grid-row grid-gap-4">
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Primary link</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">
                       Secondary link that&#39;s a bit longer than most of
                        the others
                      </a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Primary link</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">
                       Secondary link that&#39;s pretty long
                      </a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Primary link</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Primary link</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="#">Secondary link</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </nav>
        </div>
        <div class="tablet:grid-col-4">
          <div class="usa-sign-up">
            <h3 class="usa-sign-up__heading">Sign up</h3>
            <form class="usa-form">
              <label class="usa-label" for="email" id="">Your email address</label>
              <input class="usa-input" id="email" name="email" type="email" />
              <button class="usa-button" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">Name of Agency</p>
          </div>
        </div>
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
            <div class="grid-col-auto">
              <a
                class="usa-social-link usa-social-link--facebook"
                href="#"
              >
                <span>Facebook</span>
              </a>
            </div>
            <div class="grid-col-auto">
              <a
                class="usa-social-link usa-social-link--twitter"
                href="#"
              >
                <span>Twitter</span>
              </a>
            </div>
            <div class="grid-col-auto">
              <a
                class="usa-social-link usa-social-link--youtube"
                href="#"
              >
                <span>YouTube</span>
              </a>
            </div>
            <div class="grid-col-auto">
              <a
                class="usa-social-link usa-social-link--instagram"
                href="#"
              >
                <span>Instagram</span>
              </a>
            </div>
            <div class="grid-col-auto">
              <a
                class="usa-social-link usa-social-link--rss"
                href="#"
              >
                <span>RSS</span>
              </a>
            </div>
          </div>
          <h3 class="usa-footer__contact-heading">
           Agency Contact Center
          </h3>
          <address class="usa-footer__address">
            <div class="usa-footer__contact-info grid-row grid-gap">
              <div class="grid-col-auto">
                <a href="tel:1-800-555-5555">(800) 555-GOVT</a>
              </div>
              <div class="grid-col-auto">
                <a href="mailto:info@agency.gov">
                 info@agency.gov
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

export const Big = () => <TestCase css={css} html={html} />;
