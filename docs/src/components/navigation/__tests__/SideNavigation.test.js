import { render, screen } from '@testing-library/react';
import React from 'react';

import findObjectByKey from '../../../utils/findObjectByKey';
import SideNavigation from '../SideNavigation';
const mockMdxQuery = jest.requireActual(
	'../../../utils/__mocks__/mock-query-mdx-data.js'
);

describe('Side Navigation', () => {
	it('renders side navigation', () => {
		const data = findObjectByKey(
			mockMdxQuery.mockSanitizedNavData,
			'name',
			'get-started'
		);
		const pathSplit = ['get-started'];
		render(<SideNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('For Designers')).toBeInTheDocument();
		expect(screen.getByText('For Designers')).toHaveAttribute(
			'href',
			'/get-started/designers'
		);
	});
	it('renders without breaking the side navigation without nav data', () => {
		const pathSplit = ['get-started'];
		render(<SideNavigation path={pathSplit} />);
		expect(screen.getByLabelText('Side navigation')).toBeInTheDocument();
	});
	it('renders side navigation appropriately when children have children', () => {
		const data = findObjectByKey(
			mockMdxQuery.mockSanitizedNavData,
			'name',
			'foundations'
		);
		const pathSplit = ['foundations'];
		render(<SideNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Appearance')).toBeInTheDocument();
		expect(screen.getByText('Appearance')).toHaveClass(' nci-has-children');
	});
	it('renders the link of the current page with appropriate style', () => {
		const data = findObjectByKey(
			mockMdxQuery.mockSanitizedNavData,
			'name',
			'designers'
		);
		const pathSplit = ['get-started', 'designers'];
		render(<SideNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('For Designers')).toBeInTheDocument();
		expect(screen.getByText('For Designers')).toHaveClass('usa-current');
	});
	it('renders the link of the current page with appropriate style when the page has additional children', () => {
		const data = findObjectByKey(
			mockMdxQuery.mockSanitizedNavData,
			'name',
			'get-started'
		);
		const pathSplit = ['get-started'];
		render(<SideNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Get Started')).toBeInTheDocument();
		expect(screen.getByText('Get Started')).toHaveClass('usa-current ');
	});
});
