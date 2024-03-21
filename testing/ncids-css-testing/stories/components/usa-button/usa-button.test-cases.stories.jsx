import Component from './content/button.twig';
import css from './usa-button.scss';

import { TestCase } from '../../../components/test-case';

export default {
	title: 'components/Button/Test Cases/Unsupported',
};

const TestTemplate = (args) => Component(args);
export const OutlineColors = () => (
	<TestCase
		css={css}
		html={TestTemplate.bind({})({
			buttons: [
				{
					title: 'Accent Cool',
					class: 'usa-button--outline usa-button--accent-cool',
					type: 'button',
				},
				{
					title: 'Accent Warm',
					class: 'usa-button--outline usa-button--accent-warm',
					type: 'button',
				},
				{
					title: 'Base',
					class: 'usa-button--outline usa-button--base',
					type: 'button',
				},
			]
		})}
	/>
);
