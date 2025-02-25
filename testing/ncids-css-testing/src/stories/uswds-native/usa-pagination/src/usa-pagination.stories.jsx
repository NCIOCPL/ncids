import Component from './usa-pagination.twig';
import css from './index.scss?inline';
import {
	DefaultContent,
	UnboundedContent,
	EsContent,
	EsUnboundedContent,
} from './content';
import img_path from '@nciocpl/ncids-css/uswds-img/sprite.svg';
export default {
	title: 'USWDS/Components/Pagination',
	component: Component,
	parameters: { css },
};

export const Default = { args: { ... DefaultContent, img_path } };
export const Unbounded = { args: { ...UnboundedContent, img_path } };
export const Spanish = { args: { ...EsContent, img_path } };
export const SpanishUnbounded = { args: { ...EsUnboundedContent, img_path } };
