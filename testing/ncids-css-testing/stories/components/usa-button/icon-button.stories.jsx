import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './usa-button.scss';
import {
	defaultButtonsIconLeft,
	outlineButtonsIconLeft,
	secondaryOutlineButtonsIconLeft,
	defaultButtonsIconRight,
	outlineButtonsIconRight,
	secondaryOutlineButtonsIconRight,
	defaultFullWidthIconButtonLeft,
	outlineFullWidthIconButtonLeft,
	secondaryOutlineFullWidthIconButtonLeft,
	defaultFullWidthIconButtonRight,
	outlineFullWidthIconButtonRight,
	secondaryOutlineFullWidthIconButtonRight,
} from './icon-buttons';

const html = `
<h1>Icon Buttons Left</h1>
${defaultButtonsIconLeft}
<br/><br/>
${outlineButtonsIconLeft}
<br/><br/>
${secondaryOutlineButtonsIconLeft}
<br/><br/>
<h1>Icon Buttons Right</h1>
${defaultButtonsIconRight}
<br/><br/>
${outlineButtonsIconRight}
<br/><br/>
${secondaryOutlineButtonsIconRight}
<br/><br/>
<h1>Full Width Icon Buttons Left</h1>
${defaultFullWidthIconButtonLeft}
<br/><br/>
${outlineFullWidthIconButtonLeft}
<br/><br/>
${secondaryOutlineFullWidthIconButtonLeft}
<br/><br/>
<h1>Full Width Icon Buttons Right</h1>
${defaultFullWidthIconButtonRight}
<br/><br/>
${outlineFullWidthIconButtonRight}
<br/><br/>
${secondaryOutlineFullWidthIconButtonRight}
`;

export const IconButton = () => <TestCase css={css} html={html} />;
