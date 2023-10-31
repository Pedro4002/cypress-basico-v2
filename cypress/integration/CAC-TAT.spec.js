/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {

        // Correção: dentro de get() pode ter apenas "#firstName"
        cy.get('#firstName')
        .type('Pedro Moisés')
        .should('have.value', 'Pedro Moisés')

        cy.get('#lastName')
        .type('Gusmão')
        .should('have.value', 'Gusmão')

        cy.get('#email')
        .type('rodrigo@faro.com')
        .should('have.value', 'rodrigo@faro.com')

        const texto = 'Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,Batata,'
        cy.get('#open-text-area')
        .type(texto, {delay:0})
        .should('have.value', texto)

        cy.get('button')
        .click()

        //                  .sucess
        cy.get('span[class="success"]')
        .should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName')
        .type('Pedro Moisés')
        .should('have.value', 'Pedro Moisés')

        cy.get('#lastName')
        .type('Gusmão')
        .should('have.value', 'Gusmão')

        cy.get('#email')
        .type('pedro')
        .should('have.value', 'pedro')

        cy.get('#open-text-area')
        .type('a')
        .should('have.value', 'a')

        cy.get('button[type="submit"]')
        .click()

        cy.get('.error')
        .should('be.visible')
    
    })

    it.only('permanece vazio se for digitado um valor não numérico no telefone', function(){
        cy.get('#firstName')
        .type('Pedro Moisés')
        .should('have.value', 'Pedro Moisés')

        cy.get('#lastName')
        .type('Gusmão')
        .should('have.value', 'Gusmão')

        cy.get('#email')
        .type('pedro@mail.com')
        .should('have.value', 'pedro@mail.com')

        cy.get('#phone')
        .type('e')
        .should('not.have.value', 'e')

        cy.get('#open-text-area')
        .type('a')
        .should('have.value', 'a')

        cy.get('button[type="submit"]')
        .click()

        cy.get('.success')
        .should('be.visible')
    })
})