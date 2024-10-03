const scalingSizes = [...Array(21).keys()].map((num) => num === 0 ? 'micro' : num.toString());
const sizeTokens = [
	'3xs',
	'2xs',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl'
];
const themeWeights = ['light', 'normal', 'bold'];
const systemWeights = [ '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const generateThemeTypescale = (family) => {
	const heading = `
		<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold">
			<div class="grid-col-2 text-700 font-sans-1">token</div>
			<div class="grid-col-fill text-700 font-sans-1">example</div>
			<div class="grid-col-3 text-300 font-sans-1 text-right">utility class</div>
		</div>
	`;
	const entries = sizeTokens.reduce((ac, size) => {
		return ac + `
			<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
				<div class="grid-col-2 text-300 font-sans-3"><code>'${size}'</code></div>
				<div class="grid-col-fill">
					<span class="font-${family}-${size}">Tallahassee</span>
				</div>
				<div class="grid-col-3 text-300 font-sans-3 text-right"><code>font-${family}-${size}</code></div>
			</div>
		`;
	}, '');
	return `<h2>Theme typescale</h2>` + heading + entries;
};

const generateSystemTypescale = (family) => {
	const heading = `
		<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold">
			<div class="grid-col-2 text-700 font-sans-1">token</div>
			<div class="grid-col-fill text-700 font-sans-1">example</div>
			<div class="grid-col-3 text-300 font-sans-1 text-right">utility class</div>
		</div>
	`;
	const entries = scalingSizes.reduce((ac, size, idx) => {
		return ac + `
			<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
				<div class="grid-col-2 text-300 font-sans-3"><code>'${size}'</code></div>
				<div class="grid-col-fill">
					<span class="font-${family}-${size}">${idx > 18 ? 'Utica': 'Tallahassee'}</span>
				</div>
				<div class="grid-col-3 text-300 font-sans-3 text-right"><code>font-${family}-${size}</code></div>
			</div>
		`;
	}, '');
	return `<h2>System typescale</h2>` + heading + entries;
};

const generateSizesPage = (family) => {
	return `<h1>${family}</h1>` +
		generateThemeTypescale(family) +
		generateSystemTypescale(family);
}

const generateThemeFontWeights = (family) => {
	const heading = `
		<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold">
			<div class="grid-col-2 text-700 font-sans-1">token</div>
			<div class="grid-col-fill text-700 font-sans-1">example</div>
			<div class="grid-col-3 text-300 font-sans-1 text-right">utility class</div>
		</div>
	`;
	const entries = themeWeights.reduce((ac, weight, idx) => {
		return ac + `
			<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
				<div class="grid-col-2 text-300 font-sans-3"><code>'${weight}'</code></div>
				<div class="grid-col-fill">
					<span class="font-${family}-8 text-${weight}">Tallahassee</span>
				</div>
				<div class="grid-col-3 text-300 font-sans-3 text-right"><code>text-${weight}</code></div>
			</div>
		`;
	}, '');
	return `<h2>Theme font weights</h2>` + heading + entries;
};

const generateSystemFontWeights = (family) => {
	const heading = `
		<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold">
			<div class="grid-col-2 text-700 font-sans-1">token</div>
			<div class="grid-col-fill text-700 font-sans-1">example</div>
			<div class="grid-col-3 text-300 font-sans-1 text-right">utility class</div>
		</div>
	`;
	const entries = systemWeights.reduce((ac, weight, idx) => {
		return ac + `
			<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
				<div class="grid-col-2 text-300 font-sans-3"><code>'${weight}'</code></div>
				<div class="grid-col-fill">
					<span class="font-${family}-8 text-${weight}">Tallahassee</span>
				</div>
				<div class="grid-col-3 text-300 font-sans-3 text-right"><code>text-${weight}</code></div>
			</div>
		`;
	}, '');
	return `<h2>System font weights</h2>` + heading + entries;
};

const generateWeightsPage = (family) => {
	return `<h1>${family}</h1>` +
		generateThemeFontWeights(family) +
		generateSystemFontWeights(family);
}

export default {
	sizeTokens,
	scalingSizes,
	systemWeights,
	generateThemeTypescale,
	generateSystemTypescale,
	generateSizesPage,
	generateThemeFontWeights,
	generateSystemFontWeights,
	generateWeightsPage
};
