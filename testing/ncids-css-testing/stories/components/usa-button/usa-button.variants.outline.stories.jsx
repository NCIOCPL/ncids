import Component from './content/button.twig';
import css from './usa-button.scss';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Variants/Outline',
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--outline',
	},
	{
		title: 'Secondary',
		class: 'usa-button--outline usa-button--secondary',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button usa-button--outline usa-button--inverse',
		containerClass: 'bg-base-darkest padding-2',
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
