/// <reference types="cypress" />

describe('Automation API with pokeapi', () => {
    it('Successfully validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('body').should('include', {
            name: "ditto",
            order: 214
        })
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)

    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3'

        }).as('users')
        cy.get('@users').its('status').should('equal', 200)

    }); 

    it('Successfully Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
        
    });

    it('Succesfuly validate response body', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities.ability).should('include', {
                name :"limber",
                url : "https://pokeapi.co/api/v2/ability/7/"
            })
        })
    })
 
});
