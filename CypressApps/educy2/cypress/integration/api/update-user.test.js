/// <reference types="cypress" />

describe('Update User', () => {
    it('Succesfuly update user', () => {
        var user = {
            "name" : "putsal",
            "job" : "QAEngineer"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
        
    })
});