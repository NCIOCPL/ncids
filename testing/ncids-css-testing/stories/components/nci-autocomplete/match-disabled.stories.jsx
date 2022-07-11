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
      value="anti">
    <div id="my-input-termswrapper" class="nci-autocomplete__listbox listboxWidth active">
      <div id="my-input-terms" tabindex="-1" role="listbox">
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="0" aria-setsize="10" id="term-0" aria-selected="false"><span aria-label="antioxidants">antioxidants</span></div>
        <div class="nci-autocomplete__option highlight" tabindex="-1" role="option" aria-posinset="1" aria-setsize="10" id="term-1" aria-selected="true"><span aria-label="monoclonal antibodies">monoclonal antibodies</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="2" aria-setsize="10" id="term-2"><span aria-label="antineoplastons">antineoplastons</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="3" aria-setsize="10" id="term-3"><span aria-label="antioxidant">antioxidant</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="4" aria-setsize="10" id="term-4"><span aria-label="antibodies">antibodies</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="5" aria-setsize="10" id="term-5"><span aria-label="monoclonal antibody">monoclonal antibody</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="6" aria-setsize="10" id="term-6"><span aria-label="antibody">antibody</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="7" aria-setsize="10" id="term-7"><span aria-label="antiperspirant">antiperspirant</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="8" aria-setsize="10" id="term-8"><span aria-label="antineoplaston">antineoplaston</span></div>
        <div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="9" aria-setsize="10" id="term-9"><span aria-label="antiperspirants">antiperspirants</span></div></div></div>
  </div>
</form>`;
export const MatchDisabled = () => <TestCase css={css} html={html} />;
