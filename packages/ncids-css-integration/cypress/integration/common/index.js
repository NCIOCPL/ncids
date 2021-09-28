import { And } from 'cypress-cucumber-preprocessor/steps';

const font =
	'"Open Sans", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

Given(`user is navigating to {string}`, (url) => {
	cy.visit(url);
});

Then(`the {string} has {string} list style type`, (list, marker) => {
	cy.get('#root > div')
		.shadow()
		.find(`${list}.usa-list`)
		.should('have.css', 'list-style-type', marker);
});

And('loads custom font', () => {
	cy.get('#root > div')
		.shadow()
		.find('.usa-list')
		.should('have.css', 'font-family', font);
});
