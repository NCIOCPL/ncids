import Component from './usa-pagination.twig';
import css from './index.scss?inline';
import {
	DefaultContent,
	UnboundedContent,
	EsContent,
	EsUnboundedContent,
} from './content';

export default {
	title: 'USWDS/Components/Pagination',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const Unbounded = { args: UnboundedContent };
export const Spanish = { args: EsContent };
export const SpanishUnbounded = { args: EsUnboundedContent };
