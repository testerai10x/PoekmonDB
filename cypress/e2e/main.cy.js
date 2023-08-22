/// <reference types="cypress" />


import mainPage from './integration/MainPage'

const URL = 'https://unite-db.com/'


describe('PokemonDB Automation API', () => {

  beforeEach(function(){

    cy.visit(URL)

  })

  it('Main page initial URL test', () => {

    mainPage.URLValidation()
    

  })

  it('API Load test via XHR', () =>{

    mainPage.APILoadValidation()

  })

})



