/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from './searchPage';

Given('I go to application search page', () => {
    SearchPage.visit()

})

When('I fill search', () => {
    SearchPage.fillSearch('online {enter}')

})

Then('I should see Search results', () => {
    cy.get('h2').should('contain.text', 'Search Results:')

})