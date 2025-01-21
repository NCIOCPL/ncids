import Component from './test/test-patterns/test-pagination-all.twig';
import css from './index.scss?inline';
import img_path from '@nciocpl/ncids-css/uswds-img/sprite.svg';

export default {
	title: 'USWDS/Components/Pagination',
	component: Component,
	parameters: { css },
};

export const Test = { args: { img_path } };
