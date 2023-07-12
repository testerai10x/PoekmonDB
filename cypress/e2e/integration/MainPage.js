/// <reference types="cypress" />

class MainPage {
    
    URLValidation(){
        cy.title().should('eq', 'Pokémon UNITE Wiki, Builds, Emblems, Tier List, Patch Notes')
        cy.url().should('eq', 'https://unite-db.com/')
    }

}

export default new MainPage()


