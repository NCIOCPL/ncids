import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-autocomplete.scss';

import { submitBtn } from './submit-btn';

// language=HTML
const html = `
<form action="#" role="search">
  <div class="nci-autocomplete">
    <div class="nci-autocomplete__status" aria-live="assertive"></div>
    <label for="my-input">
      Search
    </label>
    <input 
      class="usa-input" 
      id="my-input" 
      type="search" 
      name="search" 
      role="combobox" 
      aria-autocomplete="list" 
      aria-owns="my-input-terms" 
      aria-activedescendant=""
      value="per">
    <div id="my-input-termswrapper" class="nci-autocomplete__listbox active">
      <div id="my-input-terms" tabindex="-1" role="listbox">
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="0" aria-setsize="10" id="term-0" aria-selected="false"><span aria-label="peripheral neuropathy"><mark>per</mark>ipheral neuropathy</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="1" aria-setsize="10" id="term-1" aria-selected="false"><span aria-label="personalized medicine"><mark>per</mark>sonalized medicine</span></div>
        <div class="nci-autocomplete__option highlight" tabindex="-1" role="option" aria-posinset="2" aria-setsize="10" id="term-2" aria-selected="true"><span aria-label="malignant peripheral nerve sheath tumor">malignant <mark>per</mark>ipheral nerve sheath tumor</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="3" aria-setsize="10" id="term-3"><span aria-label="borderline personality disorder">borderline <mark>per</mark>sonality disorder</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="4" aria-setsize="10" id="term-4"><span aria-label="collective patient perspective">collective patient <mark>per</mark>spective</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="5" aria-setsize="10" id="term-5"><span aria-label="continuous hyperthermic peritoneal perfusion">continuous hy<mark>per</mark>thermic <mark>per</mark>itoneal <mark>per</mark>fusion</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="6" aria-setsize="10" id="term-6"><span aria-label="diffuse hyperplastic perilobar nephroblastomatosis">diffuse hy<mark>per</mark>plastic <mark>per</mark>ilobar nephroblastomatosis</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="7" aria-setsize="10" id="term-7"><span aria-label="HIV window period">HIV window <mark>per</mark>iod</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="8" aria-setsize="10" id="term-8"><span aria-label="hydrogen peroxide">hydrogen <mark>per</mark>oxide</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="9" aria-setsize="10" id="term-9"><span aria-label="Hypericum perforatum">Hy<mark>per</mark>icum <mark>per</mark>foratum</span></div>
      </div>
    </div>
  </div>
</form>`;

export const OptionHighlighted = () => <TestCase css={css} html={html} />;
