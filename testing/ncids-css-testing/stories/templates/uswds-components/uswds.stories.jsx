import Component from './content.twig';
import css from './uswds.scss';

import { TestCase } from '../../../components/test-case';
import { EmergencyContent, SuccessContent, InfoContent } from '../../uswds-native/usa-alert/content';
import {
	DefaultContent as DefaultButtonGroupContent,
	SegmentedContent as SegmentedButtonGroupContent
} from '../../uswds-native/usa-button-group/src/content';

// Tests that the USWDS passthrough components work using the `ncids` package import.
// This is not the recommended way to use components; however, we need to test that they work.
export default {
	title: 'Templates/USWDS Components',
};

const Content = {
	EmergencyContent,
	SuccessContent,
	InfoContent,
	DefaultButtonGroupContent,
	SegmentedButtonGroupContent
}

const Template = (args) => Component(args);
export const USWDSComponents = () => <TestCase css={css} html={Template.bind({})(Content)} />;
