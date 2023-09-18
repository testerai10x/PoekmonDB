/// <reference types="cypress" />
//test a change
//test changce


import mainAPIPage from './integration/MainAPIPage.js'
import landingPage from './integration/LandingPage.js'

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

describe('PokemonDB Automation UI', () => {

  beforeEach(function(){

    cy.visit(URL)

  })

  it('Main page functional test', () => {

    landingPage.LandingFunctionality()
    

  })

})





