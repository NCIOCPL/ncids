import React from 'react';
import { screen, render } from '@testing-library/react';
import VersionRibbon from '../version-ribbon';

describe('VersionRibbon', () => {
	it('renders the component with the provided ncidsVersion and uswdsVersion props', async () => {
		const ncidsVersion = '1.0.0';
		const uswdsVersion = '2.0.0';

		render(
			<VersionRibbon ncidsVersion={ncidsVersion} uswdsVersion={uswdsVersion} />
		);

		const nciRegEx = new RegExp(`NCIDS\\s+release\\s+${ncidsVersion}`);
		const uswdsRegEx = new RegExp(`release\\s+${uswdsVersion}`);

		expect(screen.getByText(nciRegEx)).toBeInTheDocument();
		expect(screen.getByText(uswdsRegEx)).toBeInTheDocument();
	});

	it('renders the component with default values if ncidsVersion and uswdsVersion props are not provided', async () => {
		render(<VersionRibbon />);

		const nciRegEx = new RegExp(`NCIDS\\s+release\\s+ERROR`);
		const uswdsRegEx = new RegExp(`release\\s+ERROR`);

		expect(screen.getByText(nciRegEx)).toBeInTheDocument();
		// This matches both NCIDS and USWDS, so we end up getting 2 matches.
		expect(screen.getAllByText(uswdsRegEx)).toHaveLength(2);
	});
});
