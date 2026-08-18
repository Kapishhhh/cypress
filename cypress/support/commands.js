// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { loginSelector } from "./selector";

Cypress.Commands.add('login', () => {

    // Click Sign In
    cy.xpath("//a[normalize-space()='Sign In']").click();

    // Enter username
    cy.get(loginSelector.username_field)
        .clear()
        .type(Cypress.env("USERNAME"));

    // Enter password
    cy.get(loginSelector.password_field)
        .clear()
        .type(Cypress.env("PASSWORD"));

    // Click Login
    cy.get(loginSelector.signon_button).click();

});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })