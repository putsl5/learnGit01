/// <reference types="cypress" />

describe('Create New List', () => {
    it('Succesfuly create new user', () => {
        var user = {
            "name" : "putsal",
            "job" : "QAEngineer"
        }
        cy.request('POST', 'https://reqres.in/api/users/', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('putsal')
            expect(response.body.job).equal('QAEngineer')
        })
    })
});