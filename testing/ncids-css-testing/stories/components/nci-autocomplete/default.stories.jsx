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
    <input class="usa-input" id="nci-header-search__field" type="search" name="search" role="combobox" aria-autocomplete="list" aria-owns="nci-header-search__field-terms" aria-activedescendant="">
    ${submitBtn}
    <div id="nci-header-search__field-termswrapper" class="nci-autocomplete__listbox">
      <div id="nci-header-search__field-terms" tabindex="-1" role="listbox"></div>
    </div>
  </div>
</form>`;

export const Default = () => <TestCase css={css} html={html} />;
