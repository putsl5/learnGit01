/// <reference types="cypress" />

describe('Delete User', () => {
    it.only('Delete user', () => {
        cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
            expect(response.duration).to.be.below(1000)
           
        })
    })
});
