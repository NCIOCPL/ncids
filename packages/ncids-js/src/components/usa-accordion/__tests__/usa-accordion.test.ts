import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { USAAccordion } from '../usa-accordion.component';
import { AccordionOptions } from '../usa-accordion-options';
import { exampleAccordionPlain, exampleAccordionBad } from './example-dom';

describe('USAAccordion', () => {
	let container: HTMLElement;
	let accordion: USAAccordion;
	const options: AccordionOptions = {
		allowMultipleOpen: false,
		openSections: [1],
	};

	beforeEach(() => {
		container = exampleAccordionPlain();
		document.body.appendChild(container);
		accordion = USAAccordion.create(container, options);
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('creates accordion with default options', () => {
		expect(accordion).toBeDefined();
		expect(container).not.toHaveClass('usa-accordion--multiselectable');
	});

	it('creates accordion with custom options', () => {
		const customOptions: AccordionOptions = {
			allowMultipleOpen: true,
			openSections: [1],
		};
		accordion = USAAccordion.create(container, customOptions);
		expect(container).toHaveClass('usa-accordion--multiselectable');
	});

	it('creates accordion using public createAll function', () => {
		USAAccordion.createAll();
		expect(container.querySelector('.usa-accordion__heading')).toBeTruthy();
	});

	it('should warn the user about multiple open sections without multiselectable option', async () => {
		const createSpy = jest.spyOn(USAAccordion, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		document.getElementsByTagName('body')[0].innerHTML = '';
		const domContainer = exampleAccordionBad();
		document.body.append(domContainer);
		USAAccordion.createAll();

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should test public getSection function', () => {
		accordion = USAAccordion.create(container, options);
		expect(
			container.querySelectorAll('.usa-accordion__content')[0]
		).toBeVisible();
		const sections = accordion.getSections();
		const sectionToToggle = sections[0];
		sectionToToggle.toggleStatus();
		expect(
			container.querySelectorAll('.usa-accordion__content')[0]
		).not.toBeVisible();
	});

	it('expands all accordion sections', () => {
		accordion.closeAll();
		const content = container.querySelector(
			'.usa-accordion__content'
		) as HTMLDivElement;
		expect(content.hidden).toBeTruthy();
		accordion.openAll();
		expect(content.hidden).toBeFalsy();
	});

	it('collapses all accordion sections', () => {
		const content = container.querySelector(
			'.usa-accordion__content'
		) as HTMLDivElement;
		expect(content.hidden).toBeFalsy();
		accordion.closeAll();
		expect(content.hidden).toBeTruthy();
	});

	it('unmounts cleanly', () => {
		const customOptions: AccordionOptions = {
			allowMultipleOpen: true,
			openSections: [1],
		};
		accordion = USAAccordion.create(container, customOptions);
		expect(container).toHaveClass('usa-accordion--multiselectable');
		accordion.unregister();
		expect(container).not.toHaveClass('usa-accordion--multiselectable');
		expect(
			document.querySelectorAll('usa-accordion__heading').length
		).toBeFalsy();
		expect(
			document.querySelectorAll('usa-accordion__content').length
		).toBeFalsy();
	});

	it('toggle toggles sections and fires events', async () => {
		const user = userEvent.setup();
		const button = Array.from(
			container.querySelectorAll('.usa-accordion__button')
		)[0] as HTMLButtonElement;
		const controlledSection = button.parentElement?.nextSibling as HTMLElement;
		//let eventFired = false;
		accordion.closeAll();
		await user.click(button);
		expect(controlledSection!.hidden).toBeFalsy();
		await user.click(button);
		expect(controlledSection!.hidden).toBeTruthy();
	});
});
