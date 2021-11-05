import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Footer from '../footer/footer';

describe('Footer', () => {
	it('renders footer', () => {
		render(<Footer />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders big footer', () => {
		render(<Footer variant="big" />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders nci big footer', () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders medium footer', () => {
		render(<Footer variant="medium" />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders slim footer', () => {
		render(<Footer variant="slim" />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders Return to top anchor link', async () => {
		render(<Footer />);
		expect(screen.getByText('Return to top')).toHaveAttribute('href', '#top');
	});

	it('renders footer navigation', () => {
		render(<Footer />);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
		expect(screen.getByLabelText('Footer navigation')).toBeInTheDocument();
	});

	it('renders agency name', () => {
		render(<Footer />);
		expect(
			screen.getByText(
				'National Cancer Institute at the National Institute of Health'
			)
		).toBeInTheDocument();
	});

	it('clicking Header does not hide secondary links in nci big footer', async () => {
		render(<Footer variant="nci-big" />);

		const buttons = screen.getAllByRole('button', { expanded: false });

		buttons.forEach((button) => {
			// Accordion activates
			fireEvent.click(button);
			expect(screen.getAllByRole('list')[0]).toBeInTheDocument();

			// Accordion deactivates
			fireEvent.click(button);
			expect(screen.getAllByRole('list')[0]).toBeInTheDocument();
		});
	});

	it('renders subscribe', () => {
		render(<Footer variant="nci-big" />);
		expect(
			screen.getByLabelText('Enter your email address')
		).toBeInTheDocument();
	});

	it('renders telephone link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByText('1-800-4-CANCER')).toHaveAttribute(
			'href',
			'tel:1-800-4-CANCER'
		);
	});

	it('renders email link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByText('NCIinfo@nih.gov')).toHaveAttribute(
			'href',
			'mailto:NCIinfo@nih.gov'
		);
	});

	it('renders Facebook link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByLabelText('Facebook')).toHaveAttribute(
			'href',
			'https://www.facebook.com/cancer.gov'
		);
	});

	it('renders Twitter link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByLabelText('Twitter')).toHaveAttribute(
			'href',
			'https://twitter.com/thenci'
		);
	});

	it('renders Youtube link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByLabelText('Youtube')).toHaveAttribute(
			'href',
			'https://youtube.com/NCIgov'
		);
	});

	it('renders RSS link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByLabelText('RSS')).toHaveAttribute(
			'href',
			'https://www.cancer.gov/syndication/rss'
		);
	});

	it('renders HHS link', async () => {
		render(<Footer variant="nci-big" />);
		expect(
			screen.getByText('U.S. Department of Health and Human Services')
		).toHaveAttribute('href', 'https://www.hhs.gov/');
	});

	it('renders NIH link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByText('National Institutes of Health')).toHaveAttribute(
			'href',
			'https://www.nih.gov/'
		);
	});

	it('renders NCI link', async () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByText('USA.gov')).toHaveAttribute(
			'href',
			'https://usa.gov/'
		);
	});
});
