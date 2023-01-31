/// <reference types="cypress" />

// describe('Browser Actions', () => {

//     it('Should load correct url', () => {
//         cy.visit('https://example.com/', { timeout: 10000 })
        
//     });

//     it('Should check correct url', () => {
//         cy.url().should('include', 'example.com')
        
//     });

//     it('Should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible');
        
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