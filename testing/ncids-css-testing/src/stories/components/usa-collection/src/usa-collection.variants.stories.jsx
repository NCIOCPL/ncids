import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg'
import html from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig?twig';

import { CondensedContent } from './content';

const Component = () => {
	const replaced = html().replaceAll('./img/sprite.svg', img);
	return <div dangerouslySetInnerHTML={{ __html: replaced }}></div>;
};

export default {
	title: 'Components/Collection/Variants',
	component: Component,
	parameters: { css },
};

export const Condensed = { args: CondensedContent };
