/// <reference types="cypress" />

describe('Searchbox Test', function() {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('Should type into searchbox result page', () => {
    cy.get('#searchTerm').type('online {enter}')
  })

  it('Should show search page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
  })

})