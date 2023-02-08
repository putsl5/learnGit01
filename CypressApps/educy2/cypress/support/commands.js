// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.contains('Sign in').click()
})


Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/basic_auth/',
        auth: {  
          username: email,
          password: password
        }
      }).then((response) => {
        // cy.setCookie('sessionId', response.body.sessionId)
        // cy.setCookie('userId', response.body.userId)
        // cy.setCookie('userName', response.body.userName)
        // cy.visit('/#!/main')

      });
 })


//  Cypress.Commands.add('loginViaAPI', (
//     email = Cypress.env('userEmail'),
//     password = Cypress.env('userPassword')
//   ) => {
//     cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
//       username: email,
//       password,
//     }).then((response) => {
//       cy.setCookie('sessionId', response.body.sessionId)
//       cy.setCookie('userId', response.body.userId)
//       cy.setCookie('userName', response.body.userName)
//       cy.visit('/#!/main')
//     })
//  })
 
 
 

// Cypress.Commands.add('payments', () => {
//     cy.clearCookies()
//     cy.clearLocalStorage()

//     cy.get('#sp_payee').should('have.value', 'sprint')
//     cy.get('#sp_payee').select('Bank of America')
//     cy.get('#sp_payee').should('have.value', 'bofa')

//     cy.get('#sp_account').should('have.value', '1')
//     cy.get('#sp_account').select('Checking')
//     cy.get('#sp_account').should('have.value', '2')

//     cy.get('#sp_amount').clear()
//     cy.get('#sp_amount').type('15')
    
//     cy.get('#sp_date').click()
//     cy.get("#ui-datepicker-div").click()
//     cy.contains("[data-handler='selectDay'] a", "2").click()

//     cy.get('#sp_description').type(description)
//     cy.contains('Pay').click()

// })


