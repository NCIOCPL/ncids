import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('UsaFooter', () => {
	it('renders footer', () => {
		document.body.innerHTML = getExampleDOM();
		expect(screen.getByLabelText('Header 1', {})).toBeInTheDocument();
	});
});

function getExampleDOM() {
	return `<section id='accordion' class='usa-footer__primary-content usa-footer__primary-content--collapsible'>
		<h4>
			<button
				aria-controls='accordion1'
				class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
				Header 1
			</button>
			<button
				aria-controls='accordion1'
				class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
				Header 1
			</button>
		</h4>

		<ul
			aria-label='Header 1'
			class='usa-list usa-list--unstyled'
			id='accordion1'>
			<li class='usa-footer__secondary-link'>
				Secondary Link
			</li>

			<li class='usa-footer__secondary-link'>
				Secondary Link
			</li>
		</ul>
	</section>`;
}
