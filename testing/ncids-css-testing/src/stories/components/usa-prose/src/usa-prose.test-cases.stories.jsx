import Component from './content/usa-prose-links.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Prose/Test Cases',
	component: Component,
	parameters: { css },
};

export const ProseLinks = { args: { 'link': 'href="#"' } };
export const ProseExternalLinks = { args: { 'link': 'href="https://www.google.com"' } };
