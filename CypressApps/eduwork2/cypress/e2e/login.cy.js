/// <reference types="cypress" />

describe('login/ logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        
    });

    it('Should try to login with invaliid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    })
    it('Should logout form the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('a').should('contain.text', 'Zero Bank')
    })
})