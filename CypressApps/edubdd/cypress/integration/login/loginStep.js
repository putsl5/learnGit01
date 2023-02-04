/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')

})

When('I submit login', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('input[name="submit"]').click()

})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')

})

