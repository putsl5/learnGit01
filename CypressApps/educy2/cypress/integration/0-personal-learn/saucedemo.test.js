/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
        //cy.url().should('include','')
    });

    it('should try fixtures data', () => { 
        cy.fixture("customer").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.contains('Login').click()

        })
    });
    
    it('should check product', () => { 
        cy.fixture("produk").then(user => {
            // untuk looping
            cy.wrap(user.products).each((index)=> {
                cy.get('.inventory_item_name').contains(index.produk)
                cy.get('#add-to-cart-' + index.label).click()
            })
            cy.get('a').should('.shopping_cart_link')
        })
    });

    

});