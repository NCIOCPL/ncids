import Component from './content/button.twig';
import css from './usa-button.scss';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Default',
};

const buttonStyles = [
	{
		title: 'Primary',
		containerClass: 'ncisb-flex-gap',
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm',
	},
	{
		title: 'Base',
		class: 'usa-button--base',
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
