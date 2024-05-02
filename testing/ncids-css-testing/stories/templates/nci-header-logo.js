import nciDesktop from '../components/nci-header/img/logo_NCI.svg';
import nciMobile from '../components/nci-header/img/logo_NCI_mobile.svg';

import nciEsDesktop from '../components/nci-header/img/logo_NCI_spanish.svg';
import nciEsMobile from '../components/nci-header/img/logo_NCI_spanish_mobile.svg';

import cbiitDesktop from '../components/nci-header/img/logo_CBIIT.svg';
import cbiitMobile from '../components/nci-header/img/logo_CBIIT_mobile.svg';

import dccpsDesktop from '../components/nci-header/img/logo_DCCPS.svg';
import dccpsMobile from '../components/nci-header/img/logo_DCCPS_mobile.svg';

import dcegDesktop from '../components/nci-header/img/logo_DCEG.svg';
import dcegMobile from '../components/nci-header/img/logo_DCEG_mobile.svg';

import mypartDesktop from '../components/nci-header/img/logo_MyPART.svg';
import mypartMobile from '../components/nci-header/img/logo_MyPart_mobile.svg';

const createPictureLogo = (mobileImg, desktopImage) => {
  return `
  <div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="${desktopImage}">
        <img src="${mobileImg}"  alt="" />
      </picture>
		</a>
	</div>
  `;
}

// language=HTML
export const nciImgLogo = createPictureLogo(nciMobile, nciDesktop);

// language=HTML
export const nciSvgLogoEs = createPictureLogo(nciEsMobile, nciEsDesktop);

// language=HTML
export const cbiittSvgLogo = createPictureLogo(cbiitMobile, cbiitDesktop);

// language=HTML
export const dccpsImgLogo = createPictureLogo(dccpsMobile, dccpsDesktop);

// language=HTML
export const dcegLogo = createPictureLogo(dcegMobile, dcegDesktop);

// language=HTML
export const mypartLogo = createPictureLogo(mypartMobile, mypartDesktop);
