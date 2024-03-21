import Component from './content/button.twig';
import css from './usa-button.scss';
import iconSvg from './svg-icon';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Variants/Unstyled',
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--unstyled',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Big',
		class: 'usa-button--unstyled usa-button--big',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Small',
		class: 'usa-button--unstyled usa-button--nci-small',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Full Width',
		class: 'usa-button--unstyled usa-button--nci-full-width',
		containerClass: 'ncisb-flex-gap',
	},
];

const TestTemplate = (args) => Component(args);


const anchors = buttonStyles.map((button) => ({ ...button, type: 'a' }));
export const Anchor = () => (
	<TestCase
		css={css}
		html={TestTemplate.bind({})({
			buttons: anchors,
		})}
	/>
);

const buttons = buttonStyles.map((button) => ({ ...button, type: 'button' }));
export const Button = () => (
	<TestCase
		css={css}
		html={TestTemplate.bind({})({
			buttons: buttons,
		})}
	/>
);
