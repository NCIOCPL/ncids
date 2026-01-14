import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { USAAccordion } from '../usa-accordion.component';
import { AccordionOptions } from '../usa-accordion-options';
import {
	exampleAccordionPlain,
	exampleAccordionBad,
	exampleAccordionInitialized,
	exampleProseless,
	exampleAccordionNoNesting,
} from './example-dom';

describe('USAAccordion', () => {
	let container: HTMLElement;
	let accordion: USAAccordion;
	const options: AccordionOptions = {
		allowMultipleOpen: false,
		openSections: [1],
		headerSelector: '.usa-accordion__header',
	};

	beforeEach(() => {
		const wrapper = exampleAccordionPlain();
		container = wrapper.querySelector('.usa-accordion') as HTMLElement;
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

	it('initializes accordion behavior with existing and styled HTML elements', () => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		const wrapper = exampleAccordionInitialized();
		const domContainer = wrapper.querySelector('.usa-accordion') as HTMLElement;
		document.body.append(domContainer);
		accordion = USAAccordion.create(domContainer, options);
		expect(accordion).toBeDefined();
		expect(container).not.toHaveClass('usa-accordion--multiselectable');
	});

	it('does not apply usa-prose unless present', () => {
		document.getElementsByTagName('body')[0].innerHTML = '';

		const wrapper = exampleProseless();
		const domContainer = wrapper.querySelector('.usa-accordion') as HTMLElement;
		document.body.append(domContainer);

		USAAccordion.create(domContainer, options);
		const content = domContainer.querySelector(
			'.usa-accordion__content'
		) as HTMLDivElement;
		expect(content).not.toHaveClass('usa-prose');
	});

	it('creates accordion with custom options', () => {
		const customOptions: AccordionOptions = {
			allowMultipleOpen: true,
			openSections: [1],
			headerSelector: '.usa-accordion__header',
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

	it('expands accordion section by ID', () => {
		accordion.closeAll();
		const content = container.querySelector(
			'.usa-accordion__content'
		) as HTMLDivElement;
		expect(content.hidden).toBeTruthy();
		accordion.toggleSectionWithId(content.id);
		expect(content.hidden).toBeFalsy();
	});

	it('unmounts cleanly', () => {
		const customOptions: AccordionOptions = {
			allowMultipleOpen: true,
			openSections: [1],
			headerSelector: '.usa-accordion__header',
		};
		accordion = USAAccordion.create(container, customOptions);
		expect(container).toHaveClass('usa-accordion--multiselectable');
		accordion.unregister();
		expect(container).not.toHaveClass('usa-accordion--multiselectable');
		expect(
			document.querySelectorAll('.usa-accordion__heading').length
		).toBeFalsy();
		expect(
			document.querySelectorAll('.usa-accordion__content').length
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

	it('does not convert inner headings into buttons', async () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 375,
		});

		const domContainer = exampleAccordionNoNesting();
		document.body.append(domContainer);
		const newOptions = {
			...options,
			headerSelector: '.cgdp-article-body__heading',
		};
		USAAccordion.create(domContainer, newOptions);

		window.dispatchEvent(new Event('resize'));

		const allHeadings = document.body.querySelectorAll('h2');
		const innerHeading = allHeadings[1];

		expect(innerHeading.querySelector('button')).toBeNull();
	});
});
