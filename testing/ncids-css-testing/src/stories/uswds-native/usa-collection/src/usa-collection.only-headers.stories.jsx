import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';
import html from '@nciocpl/ncids-css/uswds-packages/usa-collection/src/usa-collection--only-headers.twig?twig';

const Component = () => {
	const replaced = html().replaceAll('./img/sprite.svg', img);
	return <div dangerouslySetInnerHTML={{ __html: replaced }}></div>;
};

export default {
	title: 'USWDS/Components/Collection',
	component: Component,
	parameters: { css },
};

export const OnlyHeaders = {};
