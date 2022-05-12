import nciImg from './img/nci-img-logo-en.svg';
import nciSvg from './img/nci-svg-logo.svg';
import cbiittSvg from './img/cbiit-svg-logo.svg';
import dccpsSVG from './img/dccps-img-logo.svg';

// language=HTML
export const nciImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" title="Home" aria-label="Home">
			<img src="${nciImg}" alt="Example NCI logo" width="385" height="38" />
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEn = `
	<div class="nci-logo">
		<a href="http://cancer.gov" title="Home" aria-label="National Cancer Institute">
			<svg role="img" width="385" height="38">
				<use href="${nciSvg}#en"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const nciSvgLogoEs = `
	<div class="nci-logo">
		<a href="http://cancer.gov" title="Home" aria-label="Instituto Nacional Del Cáncer">
			<svg role="img" width="385" height="38">
				<use href="${nciSvg}#es"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const cbiittSvgLogo = `
	<div class="nci-logo">
		<a href="http://cancer.gov" title="Home" aria-label="Home">
			<svg role="img" width="385" height="38">
				<use href="${cbiittSvg}#en"></use>
			</svg>
		</a>
	</div>
`;

// language=HTML
export const dccpsImgLogo = `
	<div class="nci-logo" id="extended-mega-logo">
		<a href="http://cancer.gov" title="Home" aria-label="Home">
			<img src="${dccpsSVG}" width="385" height="38" alt="Example DCCPS logo" />
		</a>
	</div>
`;
