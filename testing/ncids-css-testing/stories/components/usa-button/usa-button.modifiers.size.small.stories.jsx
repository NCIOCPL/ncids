import Component from './content/button.twig';
import css from './usa-button.scss';
import iconSvg from './svg-icon';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Modifiers/Size/Small',
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--nci-small'
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary usa-button--nci-small',
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool usa-button--nci-small',
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm usa-button--nci-small',
	},
	{
		title: 'Base',
		class: 'usa-button--base usa-button--nci-small',
	},
	{
		title: 'Outline',
		class: 'usa-button--outline usa-button--nci-small',
	},
	{
		title: 'Outline Secondary',
		class: 'usa-button--outline usa-button--secondary usa-button--nci-small',
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button--outline usa-button--inverse usa-button--nci-small',
		containerClass: 'bg-base-darkest padding-2'
	},
	{
		title: 'Icon Left',
		class: 'usa-button--nci-icon usa-button--nci-small',
		iconSvg: iconSvg,
	},
	{
		title: 'Icon Right',
		class: 'usa-button--nci-icon usa-button--nci-icon-right usa-button--nci-small',
		iconSvg: iconSvg,
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
