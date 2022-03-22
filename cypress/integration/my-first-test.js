/// <reference types="cypress" />

it('Google test1', function(){
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type("Sandeep Padala Github{enter}");
})

it('Google test2', function(){
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type("Github{enter}");
    cy.get('[data-hveid="CA4QAA"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click();
})