import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './skipnav-with-content.twig';
import css from './usa-skipnav.scss';

export default {
	title: "components/usa-skipnav",
	argTypes: {},
};

const Template = (args) => Component(args);

// For this example we want to use the skipnav component twig, but also need
// other content for the test. So we are making a local twig that includes
// the shared template.
export const Default = () => <TestCase css={css} html={Template.bind({})(
	{
		"label": "Skip to main content",
		"href": "#main-content",
	}
)} />;
