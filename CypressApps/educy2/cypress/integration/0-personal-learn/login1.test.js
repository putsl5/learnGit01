/// <reference types="cypress" />

context('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    
    });

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

    });

    it('should click checkbox keep me signed in', () => {
        cy.get('[type="checkbox"]').check()
        
    });

    it('should try fixtures data', () => { 
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.contains('Sign in').click()

            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')

        })
    });

    
});
