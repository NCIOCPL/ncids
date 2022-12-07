import React from 'react';
import { render } from '@testing-library/react';
import ScriptWrapper from '../ScriptWrapper';

describe('Scriptwrapper', () => {
	it('should be defined', () => {
		expect(ScriptWrapper).toBeDefined();
	});

	it('should wrap the script contents', () => {
		const script = `console.log('test');`;
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		const { container } = render(<ScriptWrapper>{`${script}`}</ScriptWrapper>);
		expect(container.querySelector('script')).toBeInTheDocument();
		expect(container.querySelector('script')).toHaveTextContent(script);
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});
});
