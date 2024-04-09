import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-sidenav.scss';

const html = `
<div class='grid-row grid-gap'>
  <div class='grid-col-4'>
    <nav aria-label='Secondary navigation example'>
      <ul class='usa-sidenav'>
        <li class='usa-sidenav__item'>
          <a href='#'>Level 1</a>
        </li>
        <li class='usa-sidenav__item'>
          <a href='#'>Level 1</a>
        </li>
        <li class='usa-sidenav__item'>
          <a href='#' class='usa-current usa-current--nci-ancestor backstop-only--level-1'>Level 1</a>
          <ul class='usa-sidenav__sublist'>
            <li class='usa-sidenav__item'>
              <a href='#''>Level 2</a>
            </li>
            <li class='usa-sidenav__item'>
              <a href='#'>Level 2</a>
            </li>
            <li class='usa-sidenav__item'>
              <a href='#' class='usa-current usa-current--nci-ancestor backstop-only--level-2'>Level 2</a>
              <ul class='usa-sidenav__sublist'>
								<li class='usa-sidenav__item'>
									<a href='#'>Level 3</a>
								</li>
								<li class='usa-sidenav__item'>
									<a href='#' class='usa-current'>Level 3</a>
								</li>
								<li class='usa-sidenav__item'>
									<a href='#' class='nci-has-children'>Level 3</a>
								</li>
							</ul>
            </li>
					</ul>
        </li>
      </ul>
    </nav>
  </div>
</div>
`;

export const NCISidenavLevel3 = () => <TestCase css={css} html={html} />;
