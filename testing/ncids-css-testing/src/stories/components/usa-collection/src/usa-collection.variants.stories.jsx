import Component from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import { CondensedContent } from './content/index.js';
import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg'


export default {
	title: 'Components/Collection/Variants',
	component: Component,
	parameters: {
		css,
	},
};


// Replace condensed collection svgs for storybook static path files
// const replaceContent = () => {
// 	const template = TestTemplate.bind({})(CondensedContent)
// 	return template.replaceAll('./img/sprite.svg', img);
// };

export const Condensed = { args: CondensedContent };
