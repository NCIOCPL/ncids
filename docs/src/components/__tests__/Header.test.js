import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Header from '../header/header';
import Nav from '../header/nav';

import logo from '../../images/nci-logo-full.svg';
import MegaMenu from '../header/mega-menu';

describe('Header component', () => {
	it('renders menu', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo}>
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders basic header', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo} variant="basic">
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders basic header with mega menu', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo} variant="basic-mega">
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders extended header', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo} variant="extended">
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders extended header with emga menu', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo} variant="extended-mega">
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders NCI extended header', () => {
		render(
			<Header
				siteTitle="Site title"
				siteLogo={logo}
				variant="nci-extended-mega">
				<Nav />
			</Header>
		);
		expect(screen.getByRole('menubar')).toBeInTheDocument();
	});

	it('renders logo with alt text', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo}>
				<Nav />
			</Header>
		);
		expect(screen.getByAltText('Site title')).toBeInTheDocument();
	});

	it('renders search', () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo}>
				<Nav />
			</Header>
		);
		expect(screen.getByRole('search')).toBeInTheDocument();
		expect(screen.getByLabelText('Search')).toBeInTheDocument();
	});

	it('clicking primary nav item opens menu list', async () => {
		render(
			<Header siteTitle="Site title" siteLogo={logo} variant="basic">
				<Nav />
			</Header>
		);

		// First nav item activate
		fireEvent.click(screen.getByText('Section 1'));
		await waitFor(() => screen.getByLabelText('Section 1'));
		expect(screen.queryByRole('menu')).toHaveTextContent('Navigation link 1');

		// First nav item deactivate
		fireEvent.click(screen.getByText('Section 1'));
		await waitFor(() => screen.getByText('Section 1'));
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();

		// Second nav item activate
		fireEvent.click(screen.getByText('Section 2'));
		await waitFor(() => screen.getByLabelText('Section 2'));
		expect(screen.queryByRole('menu')).toHaveTextContent('Navigation link 1');

		// Second nav item deactivate
		fireEvent.click(screen.getByText('Section 2'));
		await waitFor(() => screen.getByText('Section 2'));
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});

	it('clicking primary nav item opens megamenu', async () => {
		render(
			<Header
				siteTitle="Site title"
				siteLogo={logo}
				variant="nci-extended-mega">
				<MegaMenu />
			</Header>
		);

		// First nav item activate
		fireEvent.click(screen.getByText('Section 1'));
		await waitFor(() => screen.getByLabelText('Section 1'));
		expect(screen.queryByRole('menu')).toHaveTextContent('Navigation link 1');

		// First nav item deactivate
		fireEvent.click(screen.getByText('Section 1'));
		await waitFor(() => screen.getByText('Section 1'));
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();

		// Second nav item activate
		fireEvent.click(screen.getByText('Section 2'));
		await waitFor(() => screen.getByLabelText('Section 2'));
		expect(screen.queryByRole('menu')).toHaveTextContent('Navigation link 1');

		// Second nav item deactivate
		fireEvent.click(screen.getByText('Section 2'));
		await waitFor(() => screen.getByText('Section 2'));
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});
});
