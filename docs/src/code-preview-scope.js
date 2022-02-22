// This ensures that all ncids react components are available from
// the code preview.
import * as ncidsComponents from '@nciocpl/ncids-react';
import DangerouslySetHtmlContent from 'dangerously-set-html-content';
import ScriptWrapper from './components/ScriptWrapper';

export default {
	...ncidsComponents,
	DangerouslySetHtmlContent,
	ScriptWrapper,
};
