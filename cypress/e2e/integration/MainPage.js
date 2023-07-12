/// <reference types="cypress" />

class MainPage {
    
    URLValidation(){
        cy.title().should('eq', 'Pokémon UNITE Wiki, Builds, Emblems, Tier List, Patch Notes')
        cy.url().should('eq', 'https://unite-db.com/')

    }

    APILoadValidation(){
        cy.intercept('/pokemon.json').as('xhrDir')

        cy.visit('https://unite-db.com/')

        cy.wait('@xhrDir').then(request => {
        cy.log(request.response)

        expect(request.response.statusCode).eq(200)
        expect(request.response.statusMessage).eq('OK')
        expect(request.response).to.have.property('headers')
        expect(request.response.headers).to.have.property('content-type').eq("application/json; charset=utf-8")
    })

    }

}

export default new MainPage()


