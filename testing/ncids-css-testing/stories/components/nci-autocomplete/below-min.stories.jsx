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
      value="bi">
    <div id="my-input-termswrapper" class="nci-autocomplete__listbox listboxWidth">
      <div id="my-input-terms" tabindex="-1" role="listbox"></div>
    </div>
  </div>
</form>`;

export const BelowMin = () => <TestCase css={css} html={html} />;
