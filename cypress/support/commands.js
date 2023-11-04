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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.visit('./src/index.html')
    
    cy.get('#firstName')
    .type('Pedro Moisés')
    .should('have.value', 'Pedro Moisés')

    cy.get('#lastName')
    .type('Gusmão')
    .should('have.value', 'Gusmão')

    cy.get('#email')
    .type('pedro@mail.com')
    .should('have.value', 'pedro@mail.com')

    cy.get('#phone-checkbox')
    .check()
    .should('be.checked')

    cy.get('#open-text-area')
    .type('a')
    .should('have.value', 'a')

    cy.contains('button[type="submit"]', 'Enviar')
    .click()
})