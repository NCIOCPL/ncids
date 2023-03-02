import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-select.twig";
import Test from "./test/test-patterns/usa-select--multiple.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Select",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => Test(args);

export const Select = () => <TestCase css={css} html={Template.bind({})()} />;
export const MultipleTest = () => <TestCase css={css} html={TestTemplate.bind({})(
	{
		size: 0,
	}
)} />;
