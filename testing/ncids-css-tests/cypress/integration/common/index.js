import { Then } from "cypress-cucumber-preprocessor/steps";

Given('user is navigating to {string}', (a) => {
  cy.visit(a);
});
