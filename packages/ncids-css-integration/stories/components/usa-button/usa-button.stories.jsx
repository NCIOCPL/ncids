import React from 'react';
import { TestCase } from '../../../components/test-case';
import sass from '!!raw-loader!sass-loader!./button.scss';

export default {
	title: 'components/usa-button/button',
	argTypes: {},
};

const Template = (args) => <TestCase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	html: '<button class="usa-button">Butto n</button>',
	sass: sass,
};

export const Secondary = Template.bind({});
Secondary.args = {
	...Primary.args,
	html: '<button class="usa-button usa-button--secondary">Button</button>',
};

export const Base = Template.bind({});
Base.args = {
	...Primary.args,
	html: '<button class="usa-button usa-button--base">Button</button>',
};
