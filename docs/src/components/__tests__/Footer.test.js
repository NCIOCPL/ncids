import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Footer from '../footer/footer';

describe('Footer', () => {
	it('renders footer', () => {
		render(<Footer />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders nci big footer', () => {
		render(<Footer variant="nci-big" />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders Return to top anchor link', async () => {
		render(<Footer />);
		const backToTop = screen.getByText('Back To Top');
		expect(backToTop).toBeInTheDocument();
	});

	it('renders footer navigation', () => {
		render(<Footer />);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
		expect(screen.getByLabelText('Footer navigation')).toBeInTheDocument();
	});

	it('renders agency name', () => {
		render(<Footer />);

		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(
			screen.getByText((content, node) => {
				// These won't match
				// <div>Hello <span>world</span></div>
				// getByText("Hello world");
				// getByText(/Hello world/);
				const hasText = (node) =>
					node.textContent ===
					'National Cancer Institute at the National Institute of Health';
				const nodeHasText = hasText(node);
				const childrenDontHaveText = Array.from(node.children).every(
					(child) => !hasText(child)
				);

				return nodeHasText && childrenDontHaveText;
			})
		).toBeInTheDocument();
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
	});

	it('clicking Header does not hide secondary links in nci big footer', () => {
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
		render(<Footer variant="nci-big" accountId="USNIHNCI" />);
		expect(
			screen.getByLabelText('Enter your email address')
		).toBeInTheDocument();
	});

	it('renders subscribe with categories', () => {
		render(
			<Footer
				variant="nci-big"
				accountId="USNIHNCI"
				categoryId="USNIHNCI_C25"
			/>
		);
		expect(
			screen.getByLabelText('Enter your email address')
		).toBeInTheDocument();
	});

	it('subscribe fails with invalid email', () => {
		render(<Footer variant="nci-big" accountId="USNIHNCI" />);
		const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.submit(button);
		expect(
			screen.queryByText('Enter a valid email address')
		).toBeInTheDocument();
	});

	it('subscribe succeeds with valid email', () => {
		render(<Footer variant="nci-big" accountId="USNIHNCI" />);
		//const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.change(screen.getByLabelText('Enter your email address'), {
			target: { value: 'test@test.com' },
		});
		fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));
		expect(
			screen.queryByText('Enter a valid email address')
		).not.toBeInTheDocument();
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
		const query = screen.getByText('Facebook').parentElement.parentElement;
		expect(query).toHaveAttribute(
			'href',
			'https://www.facebook.com/cancer.gov'
		);
	});

	it('renders Twitter link', async () => {
		render(<Footer variant="nci-big" />);
		const query = screen.getByText('Twitter').parentElement.parentElement;
		expect(query).toHaveAttribute('href', 'https://twitter.com/thenci');
	});

	it('renders Instagram link', async () => {
		render(<Footer variant="nci-big" />);
		const query = screen.getByText('Instagram').parentElement.parentElement;
		expect(query).toHaveAttribute(
			'href',
			'https://www.instagram.com/nationalcancerinstitute/'
		);
	});

	it('renders Youtube link', async () => {
		render(<Footer variant="nci-big" />);
		const query = screen.getByText('Youtube').parentElement.parentElement;
		expect(query).toHaveAttribute('href', 'https://www.youtube.com/NCIgov');
	});

	it('renders Linkedin link', async () => {
		render(<Footer variant="nci-big" />);
		const query = screen.getByText('Linkedin').parentElement.parentElement;
		expect(query).toHaveAttribute(
			'href',
			'https://www.linkedin.com/company/nationalcancerinstitute/'
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
