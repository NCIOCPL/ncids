import typography from '../../fonts.js';
import css from '../../fonts.scss?inline';

const family = 'ui';
const html = typography.generateSizesPage(family);
const Component = () => <div dangerouslySetInnerHTML={{ __html: html }}></div>;

export default {
	title: 'design-tokens/Typography/Fonts/Role/UI',
	component: Component,
	parameters: { css },
};

export const UISizes = {};
