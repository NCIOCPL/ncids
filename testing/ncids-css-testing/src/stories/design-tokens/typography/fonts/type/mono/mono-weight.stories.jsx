import typography from '../../fonts';
import css from '../../fonts.scss?inline';

const family = 'mono';
const html = typography.generateWeightsPage(family);
const Component = () => <div dangerouslySetInnerHTML={{ __html: html }}></div>;

export default {
	title: 'design-tokens/Typography/Fonts/Type/Mono',
	component: Component,
	parameters: { css },
};

export const MonoWeight = {};
