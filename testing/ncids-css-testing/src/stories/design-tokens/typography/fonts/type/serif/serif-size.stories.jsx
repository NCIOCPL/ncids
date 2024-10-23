import typography from '../../fonts';
import css from '../../fonts.scss?inline';

const family = 'serif';
const html = typography.generateSizesPage(family);
const Component = () => <div dangerouslySetInnerHTML={{ __html: html }}></div>;

export default {
	title: 'design-tokens/Typography/Fonts/Type/Serif',
	component: Component,
	parameters: { css },
};

export const SerifSizes = {};
