/// <reference types="cypress" />

import mainPage from './integration/MainPage.js'

const URL = 'https://unite-db.com/'


describe('PokemonDB Automation Suite', () => {

  beforeEach(function(){

    cy.visit(URL)

  })

  it('main page initial URL/API test', () => {

    mainPage.URLValidation()
    cy.log('Test Pass!!')

  })

})