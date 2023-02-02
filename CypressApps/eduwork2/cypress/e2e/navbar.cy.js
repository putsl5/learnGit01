/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should dispaly online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        //cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text', 'Online Banking')
        
    })

    it('Should dispaly feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        //cy.get('h3').should('be.visible')
        cy.get('h3').should('contain.text', 'Feedback')
    })

    it('Should dispaly homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain.text', 'Home')
        

    })
})