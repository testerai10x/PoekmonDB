/// <reference types="cypress" />


import mainPage from './integration/MainPage.js'

const URL = 'https://unite-db.com/'


describe('PokemonDB Automation Suite', () => {

  beforeEach(function(){

    cy.visit(URL)

  })

  it('Main page initial URL test', () => {

    mainPage.URLValidation()
    

  })

})

describe('Main page API Load test', () =>{

  it('API Load test via XHR', () =>{

    mainPage.APILoadValidation()

  })

})