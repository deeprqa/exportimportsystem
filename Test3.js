/// <reference types="Cypress" />
describe('My first Test Suite', function(){

    it('My First Test Case Function', function(){
      
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.get('div.product').should('have.length', 4);
    })
})
//New changes