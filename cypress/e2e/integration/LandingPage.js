/// <reference types="cypress" />

class LandingPage {

    constructor() {
        
        this.pagetitle = 'h1[class="title"]'
        this.searchbar = 'input[name="pokemon-search"]'
        this.radiofilter = '[for="All-Rounder"]'

    }

    LandingFunctionality() {
        cy.get(this.pagetitle).should('have.text', 'Pokémon Unite Character Database')
        cy.get(this.radiofilter).click()
        cy.get('a[name="Lucario"]').should('have.text', '  Lucario')
        //cy.get(this.searchbar).should('be.visible').type('Pikachu')
        //cy.get('a[name="Pikachu"]').should('have.text', '  Pikachu')
    }

}

export default new LandingPage()