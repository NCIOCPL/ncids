import { render, screen } from '@testing-library/react';
import React from 'react';

import List from '../list';

describe('List component', () => {
	it('renders unstyled list', () => {
		render(
			<List variant="unstyled">
				<>Item 1</>
				<>Item 2</>
				<>Item 3</>
			</List>
		);

		expect(screen.getByRole('list')).toBeInTheDocument;
		const listItems = screen.queryAllByRole('listitem');
		expect(listItems[0]).toBeInTheDocument();
		expect(listItems[0]).toHaveTextContent('Item 1');
	});

	it('renders unordered list', () => {
		render(
			<List variant="unordered">
				<>Item 1</>
				<>Item 2</>
				<>Item 3</>
			</List>
		);

		expect(screen.getByRole('list')).toBeInTheDocument;
		const listItems = screen.queryAllByRole('listitem');
		expect(listItems[0]).toBeInTheDocument();
		expect(listItems[0]).toHaveTextContent('Item 1');
	});

	it('renders ordered list', () => {
		render(
			<List variant="ordered">
				<>Item 1</>
				<>Item 2</>
				<>Item 3</>
			</List>
		);

		expect(screen.getByRole('list')).toBeInTheDocument;
		const listItems = screen.queryAllByRole('listitem');
		expect(listItems[0]).toBeInTheDocument();
		expect(listItems[0]).toHaveTextContent('Item 1');
	});

	it('renders footer list', () => {
		render(
			<List variant="unstyled" component="footer">
				<>Item 1</>
				<>Item 2</>
				<>Item 3</>
			</List>
		);

		expect(screen.getByRole('list')).toBeInTheDocument;
		const listItems = screen.queryAllByRole('listitem');
		expect(listItems[0]).toBeInTheDocument();
		expect(listItems[0]).toHaveTextContent('Item 1');
	});
});
