/// <reference types="cypress" />


import mainAPIPage from './integration/MainAPIPage.js'

const URL = 'https://unite-db.com/'


describe('PokemonDB Automation API', () => {

  beforeEach(function(){

    cy.visit(URL)

  })

  it('Main page initial URL test', () => {

    mainAPIPage.URLValidation()
    

  })

  it('API Load test via XHR', () =>{

    mainAPIPage.APILoadValidation()

  })

})







