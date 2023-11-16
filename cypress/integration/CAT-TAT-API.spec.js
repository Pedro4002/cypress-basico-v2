describe('Central de Atendimento ao Cliente por API - CAT API', function() {
    it('faz uma requisição HTTP', function() {
        cy.request({
            method: 'GET',
            url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html',
        }).then(function(response) {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
        })
        })
    })