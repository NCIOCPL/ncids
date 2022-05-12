import nciImg from './img/nci-img-logo-en.svg';
import nciSvg from './img/nci-svg-logo.svg';
import cbiittSvg from './img/cbiit-svg-logo.svg';
import dccpsSVG from './img/dccps-img-logo.svg';

// language=HTML
export const nciImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
			<img src="${nciImg}" width="385" height="38" alt="" />
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEn = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
			<svg role="img" width="385" height="38" aria-hidden="true">
				<use href="${nciSvg}#en"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEs = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
			<svg role="img" width="385" height="38" aria-hidden="true">
				<use href="${nciSvg}#es"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const cbiittSvgLogo = `
	<div class="nci-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
			<svg role="img" width="385" height="38" aria-hidden="true">
				<use href="${cbiittSvg}#en"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const dccpsImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" aria-label="Insert appropriate label here">
			<img src="${dccpsSVG}" width="385" height="38" alt="" />
		</a>
	</div>
`;
