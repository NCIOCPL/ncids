import { fireEvent, waitFor, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIFooter } from '../nci-footer.component';
import { getExampleDOM } from './nci-footer-dom';

describe('NCI Footer collapse', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should hide list on click on small with default options', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		global.innerWidth = 400;
		global.dispatchEvent(new Event('resize'));

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(<HTMLElement>element);
		expect(footer).toBeTruthy();

		// On init, list is not visible and button expanded is false
		const buttonInit = screen.getAllByRole('button', { expanded: false });
		expect(buttonInit[0]).toBeInTheDocument();
		const listInit = screen.queryByRole('list', { hidden: false });
		expect(listInit).not.toBeInTheDocument();

		// On expand, list is visible and expanded is true
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonExpand = screen.getAllByRole('button', { expanded: true });
			expect(buttonExpand[0]).toBeInTheDocument();

			const listExpand = screen.getAllByRole('list', { hidden: true });
			expect(listExpand[0]).toBeInTheDocument();
		});

		// On collapse, list is not visible and button expanded is false
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonCollapse = screen.getAllByRole('button', { expanded: false });
			expect(buttonCollapse[0]).toBeInTheDocument();
			const listCollapse = screen.queryByRole('list', { hidden: false });
			expect(listCollapse).not.toBeInTheDocument();
		});
	});

	it('should hide list on click on small', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		global.innerWidth = 400;
		global.dispatchEvent(new Event('resize'));

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(footer).toBeTruthy();

		// On init, list is not visible and button expanded is false
		const buttonInit = screen.getAllByRole('button', { expanded: false });
		expect(buttonInit[0]).toBeInTheDocument();
		const listInit = screen.queryByRole('list', { hidden: false });
		expect(listInit).not.toBeInTheDocument();

		// On expand, list is visible and expanded is true
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonExpand = screen.getAllByRole('button', { expanded: true });
			expect(buttonExpand[0]).toBeInTheDocument();

			const listExpand = screen.getAllByRole('list', { hidden: true });
			expect(listExpand[0]).toBeInTheDocument();
		});

		// On collapse, list is not visible and button expanded is false
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonCollapse = screen.getAllByRole('button', { expanded: false });
			expect(buttonCollapse[0]).toBeInTheDocument();
			const listCollapse = screen.queryByRole('list', { hidden: false });
			expect(listCollapse).not.toBeInTheDocument();
		});
	});

	it('should always have visible list on desktop', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(footer).toBeTruthy();

		const buttons = screen.getAllByRole('button');
		const label = buttons[0].innerHTML.trim();

		// On init
		expect(screen.getByLabelText(label)).toBeInTheDocument();

		// On "expand"
		fireEvent.click(buttons[0]);
		await waitFor(() => {
			expect(screen.getByLabelText(label)).toBeInTheDocument();
		});

		// On "collapse"
		fireEvent.click(buttons[0]);
		await waitFor(() => {
			expect(screen.getByLabelText(label)).toBeInTheDocument();
		});
	});

	it('should hide list on click on custom width', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		global.innerWidth = 799;
		global.dispatchEvent(new Event('resize'));

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseWidth: 800,
		});
		expect(footer).toBeTruthy();

		// On init, list is not visible and button expanded is false
		const buttonInit = screen.getAllByRole('button', { expanded: false });
		expect(buttonInit[0]).toBeInTheDocument();
		const listInit = screen.queryByRole('list', { hidden: false });
		expect(listInit).not.toBeInTheDocument();

		// On expand, list is visible and expanded is true
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonExpand = screen.getAllByRole('button', { expanded: true });
			expect(buttonExpand[0]).toBeInTheDocument();

			const listExpand = screen.getAllByRole('list', { hidden: true });
			expect(listExpand[0]).toBeInTheDocument();
		});

		// On collapse, list is not visible and button expanded is false
		fireEvent.click(buttonInit[0]);
		await waitFor(() => {
			const buttonCollapse = screen.getAllByRole('button', { expanded: false });
			expect(buttonCollapse[0]).toBeInTheDocument();
			const listCollapse = screen.queryByRole('list', { hidden: false });
			expect(listCollapse).not.toBeInTheDocument();
		});
	});
});
