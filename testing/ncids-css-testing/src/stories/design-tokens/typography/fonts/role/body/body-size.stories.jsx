import typography from '../../fonts';
import css from '../../fonts.scss?inline';

const family = 'body';
const html = typography.generateSizesPage(family);
const Component = () => <div dangerouslySetInnerHTML={{ __html: html }}></div>;

export default {
	title: 'design-tokens/Typography/Fonts/Role/Body',
	component: Component,
	parameters: { css },
};

export const BodySizes = {};
