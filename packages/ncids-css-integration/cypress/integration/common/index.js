import { And } from 'cypress-cucumber-preprocessor/steps';

Given(`user is navigating to {string}`, (url) => {
	cy.visit(url);
});

Then(`the {string} has {string} of {string}`, (selector, property, value) => {
	cy.get('#root > div')
		.shadow()
		.find(`${selector}`)
		.should('have.css', property, value);
});

And('the {string} loads {string} font', (selector, fontface) => {
	const font =
		fontface === 'sans'
			? '"Open Sans", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
			: fontface === 'serif'
			? 'Poppins'
			: '';

	cy.get('#root > div')
		.shadow()
		.find(selector)
		.should('have.css', 'font-family', font);
});
