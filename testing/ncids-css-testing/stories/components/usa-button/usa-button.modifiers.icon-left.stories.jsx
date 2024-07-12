import Component from './content/button.twig';
import css from './usa-button.scss';
import iconSvg from './svg-icon';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Modifiers/Icon/Icon Left',
};

const buttonStyles = [
	{
		title: 'Primary',
		class: 'usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Secondary',
		class: 'usa-button--secondary usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Accent Cool',
		class: 'usa-button--accent-cool usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Accent Warm',
		class: 'usa-button--accent-warm usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Base',
		class: 'usa-button--base usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Outline',
		class: 'usa-button--outline usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Outline Secondary',
		class: 'usa-button--outline usa-button--secondary usa-button--nci-icon',
		iconSvg: iconSvg,
	},
	{
		title: 'Outline Inverse',
		class: 'usa-button--outline usa-button--inverse usa-button--nci-icon',
		iconSvg: iconSvg,
		containerClass: 'bg-base-darkest padding-2'
	},
	{
		title: 'Full Width',
		class: 'usa-button--nci-icon usa-button--nci-full-width',
		iconSvg: iconSvg,
	},
	{
		title: 'Unstyled',
		class: 'usa-button--unstyled usa-button--nci-icon',
		iconSvg: iconSvg,
		containerClass: 'ncisb-flex-gap',
	}
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
