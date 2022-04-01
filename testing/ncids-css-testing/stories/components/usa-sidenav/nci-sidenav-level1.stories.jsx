import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-sidenav.scss';

const html = `
<div class='grid-row grid-gap'>
  <div class='grid-col-4'>
    <nav aria-label='Secondary navigation example'>
      <ul class='usa-sidenav usa-sidenav--nci-sidenav'>
        <li class='usa-sidenav__item'>
          <a href='#' class='backstop-only--level-1'>Level 1</a>
        </li>
        <li class='usa-sidenav__item'>
          <a href='#' class='usa-current'>Level 1</a>
        </li>
        <li class='usa-sidenav__item'>
          <a href='#' class='nci-has-children'>Level 1</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`;

export const NCISidenavLevel1 = () => <TestCase css={css} html={html} />;
