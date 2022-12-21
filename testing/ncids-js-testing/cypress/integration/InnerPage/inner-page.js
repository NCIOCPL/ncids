import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('The user navigates to {string}', (path) => {
	cy.visit(path);
});
