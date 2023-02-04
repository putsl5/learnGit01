/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I go to application search page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')

})

When('I fill search', () => {
    cy.get('#searchTerm').type('online {enter}')

})

Then('I should see Search results', () => {
    cy.get('h2').should('contain.text', 'Search Results:')

})