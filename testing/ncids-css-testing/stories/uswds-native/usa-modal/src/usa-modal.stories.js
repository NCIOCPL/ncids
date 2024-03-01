import React from 'react';
import Component from "./usa-modal.twig";
import { DefaultContent, ForcedActionContent, LargeContent } from "./content";
import { TestCase } from '../../../../components/test-case';
import { modal } from '@uswds/uswds/src/js/components';
import css from './index.scss';

export default {
  title: "USWDS/Components/Modal",
	args: {
		uswdsBehaviorJs: modal,
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const ForcedAction = () => <TestCase css={css} html={Template.bind({})(ForcedActionContent)} />;

export const Large = () => <TestCase css={css} html={Template.bind({})(LargeContent)} />;
