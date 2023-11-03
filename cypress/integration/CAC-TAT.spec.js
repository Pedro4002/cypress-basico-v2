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

        cy.contains('button', 'Enviar')
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
        .type('pedro@exemplo')
        .should('have.value', 'pedro@exemplo')

        cy.get('#open-text-area')
        .type('a')
        .should('have.value', 'a')

        cy.contains('button[type="submit"]', 'Enviar')
        .click()

        cy.get('.error')
        .should('be.visible')
    
    })

    it('permanece vazio se for digitado um valor não numérico no telefone', function(){
        cy.get('#phone')
        .type('batata batata')
        .should('have.value', '')
  })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
        .type('Pedro Moisés')
        .clear()
        .should('have.value', '')
        
        cy.get('#lastName')
        .type('Gusmão')
        .clear()
        .should('have.value', '')

        cy.get('#email')
        .type('bá@tchê.com')
        .clear()
        .should('have.value', '')
        
        cy.get('#phone')
        .type('122222')
        .clear()
        .should('have.value', '')
    })

    it('envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success')
        .should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product')
        .select('youtube')
        .should('have.value', 'Youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
        .select('mentoria')
        .should('have.value','mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback', function() {
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    })

    it.only('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })
})