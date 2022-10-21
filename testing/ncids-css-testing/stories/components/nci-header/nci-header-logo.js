import nciDesktop from './img/logo_NCI.svg';
import nciMobile from './img/logo_NCI_mobile.svg';

import nciEsDesktop from './img/logo_NCI_spanish.svg';
import nciEsMobile from './img/logo_NCI_spanish_mobile.svg';

import cbiitDesktop from './img/logo_CBIIT.svg';
import cbiitMobile from './img/logo_CBIIT_mobile.svg';

import dccpsDesktop from './img/logo_DCCPS.svg';
import dccpsMobile from './img/logo_DCCPS_mobile.svg';

import dcegDesktop from './img/logo_DCEG.svg';
import dcegMobile from './img/logo_DCEG_mobile.svg';

import mypartDesktop from './img/logo_MyPART.svg';
import mypartMobile from './img/logo_MyPart_mobile.svg';

// language=HTML
export const nciImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${nciDesktop}">
        <img src="${nciMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEn = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${nciDesktop}">
        <img src="${nciMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEs = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
    <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${nciEsDesktop}">
        <img src="${nciEsMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const cbiittSvgLogo = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
    <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${cbiitDesktop}">
        <img src="${cbiitMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const dccpsImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${dccpsDesktop}">
        <img src="${dccpsMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const dcegLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${dcegDesktop}">
        <img src="${dcegMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;

// language=HTML
export const mypartLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${mypartDesktop}">
        <img src="${mypartMobile}"  alt="" />
      </picture>
		</a>
	</div>
`;
