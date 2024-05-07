import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './skipnav-with-content.twig';
import css from './usa-skipnav.scss';

export default {
	title: 'components/Skipnav/Default',
	argTypes: {},
};

const Template = (args) => Component(args);

// For this example we want to use the skipnav component twig, but also need
// other content for the test. So we are making a local twig that includes
// the shared template.
export const English = () => <TestCase css={css} html={Template.bind({})(
	{
		label: 'Skip to main content',
		href: '#main-content',
		placeholder: 'Navigation Placeholder',
		maincontent: 'Main Page Content',
	}
)} />;

export const Spanish = () => <TestCase langcode='es' css={css} html={Template.bind({})(
	{
		label: 'Saltar al contenido principal',
		href: '#main-content',
		placeholder: 'Marcador de posición de navegación',
		maincontent: 'Contenido de la página de inicio',
	}
)} />;
