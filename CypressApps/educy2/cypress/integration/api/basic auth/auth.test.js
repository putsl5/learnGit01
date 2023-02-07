/// <reference types="cypress" />

describe('Basic Auth', function() {
    it('Successfully login by appending username and password in URL', function () {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login using headers', function () {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
        cy.loginViaAPI('admin', 'admin')
    })

    // it('should try fixtures data', () => { 
        
    // })

    
    // it('should try fixtures data', () => { 
    //     // untuk mengambil data dari file json (fixture)
    //     cy.fixture("user").then(user => {  
    //         const username = user.username
    //         const password = user.password
            
    //         // untuk memanggil dari custom command yang ada di commands.js
    //         cy.login(username, password)

    //         // cy.get('#user_login').clear()
    //         // cy.get('#user_login').type(username)

    //         // cy.get('input[name="user_password"]').clear()
    //         // cy.get('input[name="user_password"]').type(password)

    //         // cy.contains('Sign in').click()

    //         cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')

    //     })
    // });

 
 
});
