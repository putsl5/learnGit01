/// <reference types="cypress" />

describe('Working with inputs', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', '')
    });

    it('should check product', () => { 
       
        cy.fixture("customer").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.contains('Login').click()

        })
       
        cy.fixture("produk").then(user => {
            // untuk looping
            cy.wrap(user.products).each((index)=> {
                cy.get('.inventory_item_name').contains(index.produk)
                cy.get('#add-to-cart-' + index.label).click()
            })
        })
        cy.get('.shopping_cart_link').click()
        cy.get('#continue-shopping').click()
        cy.get('#remove-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()

        cy.get('span').should('contain.text', 'Checkout: Your Information')

        cy.get('#first-name').clear()
        cy.get('#first-name').type('Putri')

        cy.get('#last-name').clear()
        cy.get('#last-name').type('Salsabila')

        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('45363')
       

        cy.get('#continue').click()
        cy.get('span').should('contain.text', 'Checkout: Overview')
        cy.get('#finish').click()
        cy.get('span').should('contain.text', 'Checkout: Complete!')

        cy.get('#back-to-products').click()
        cy.get('span').should('contain.text', 'Products')

        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    });
   
});