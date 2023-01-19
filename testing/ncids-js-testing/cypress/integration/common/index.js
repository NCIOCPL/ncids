import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`The browser title is {string}`, (title) => {
	cy.title().should('include', title);
});

Then('The page title is {string}', (title) => {
	cy.get('h1').should('contain', title);
});
