/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {

        cy.get('input[id="firstName"]')
        .type('Pedro Moisés')
        .should('have.value', 'Pedro Moisés')

        cy.get('input[id="lastName"]')
        .type('Gusmão')
        .should('have.value', 'Gusmão')

        cy.get('input[type="email"')
        .type('rodrigo@faro.com')
        .should('have.value', 'rodrigo@faro.com')

        cy.get('textarea')
        .type('kkkk')
        .should('have.value', 'kkkk')

        cy.get('button')
        .click()

        cy.get('span[class="success"]')
        .should('be.visible')
    })

})