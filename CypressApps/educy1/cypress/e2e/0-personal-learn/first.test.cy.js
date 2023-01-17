/// <reference types="cypress" />

// describe('My First Test', () => {

//     it('Visit The Kitchen Sink', () => {
//         cy.visit('https://example.cypress.io')
//         cy.get('h1').contains('Kitchen Sink')
//         cy.contains('get').click()
//         cy.url().should('include', '/commands/querying')
//     });
// });

describe('My First Test', () => {

    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        //cy.pause()
       
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email')
        .type('p.salsabila1001@gmail.com')
        .should('have.value', 'p.salsabila1001@gmail.com')
    });
});