import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ScriptWrapper from '../ScriptWrapper';

afterEach(cleanup);

describe('Scriptwrapper', () => {
	it('should be defined', () => {
		expect(ScriptWrapper).toBeDefined();
	});

	it('should wrap the script contents', () => {
		const script = `console.log('test');`;
		const { container } = render(<ScriptWrapper>{`${script}`}</ScriptWrapper>);
		expect(container.querySelector('script')).toBeInTheDocument();
		expect(container.querySelector('script')).toHaveTextContent(script);
	});
});
