import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-autocomplete.scss';

import { submitBtn } from './submit-btn';

// language=HTML
const html = `
<form class="nci-header-search" role="search">
  <div class="nci-autocomplete"><div class="nci-autocomplete__status" aria-live="assertive"></div>
    <label class="usa-sr-only" for="nci-header-search__field">
      Search
    </label>
    <input class="usa-input" id="nci-header-search__field" type="search" name="search" role="combobox" aria-autocomplete="list" aria-owns="nci-header-search__field-terms" aria-activedescendant="" value="bili" />
    ${submitBtn}
    <div id="nci-header-search__field-termswrapper" class="nci-autocomplete__listbox active">
      <div id="nci-header-search__field-terms" tabindex="-1" role="listbox">
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="0" aria-setsize="7" id="term-0"><span aria-label="biliary cancer"><mark>bili</mark>ary cancer</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="1" aria-setsize="7" id="term-1"><span aria-label="biliary"><mark>bili</mark>ary</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="2" aria-setsize="7" id="term-2"><span aria-label="biliary cirrhosis"><mark>bili</mark>ary cirrhosis</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="3" aria-setsize="7" id="term-3"><span aria-label="biliary system"><mark>bili</mark>ary system</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="4" aria-setsize="7" id="term-4"><span aria-label="biliary tract"><mark>bili</mark>ary tract</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="5" aria-setsize="7" id="term-5"><span aria-label="bilirubin"><mark>bili</mark>rubin</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="6" aria-setsize="7" id="term-6"><span aria-label="percutaneous transhepatic biliary drainage">percutaneous transhepatic <mark>bili</mark>ary drainage</span></div></div>
      </div>
  </div>
</form>`;

export const Suggestions = () => <TestCase css={css} html={html} />;
