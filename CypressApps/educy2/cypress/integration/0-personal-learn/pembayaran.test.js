/// <reference types="cypress" />

import { recurse } from "cypress-recurse";

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    
    });

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

    });

    it('should click checkbox keep me signed in', () => {
        cy.get('[type="checkbox"]').check()
      
    });

    it('should click submit', () => {
        cy.contains('Sign in').click()
        cy.get('a').contains('Pay Bills').click()
        cy.get('h2').should('have.text', 'Make payments to your saved payees')

    });

    it('should fill Make payments to your saved payees', () => {
        //pertama, tidak ada opsi yang dipilih
        cy.get('#sp_payee').should('have.value', 'sprint')
        // pilih opsi dengan konten teks yang cocok
        cy.get('#sp_payee').select('Bank of America')
        //konfirmasi bahwa konten teks yang cocok telah dipilih
        cy.get('#sp_payee').should('have.value', 'bofa')

        cy.get('#sp_account').should('have.value', '1')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_account').should('have.value', '2')
     
        cy.get('#sp_amount').clear()
        cy.get('#sp_amount').type('15')
          
        // Calendar Validations
        cy.get('#sp_date').click()
        cy.get("#ui-datepicker-div").click()
        cy.contains("[data-handler='selectDay'] a", "2").click()

        // recurse(
        // () => cy.get(".ui-datepicker-month").invoke("text"),
        // (n) => {
        //     if (!n.includes("December")) {
        //     cy.get("[title='Next']").click()
        //     return false;
        //     }
        //     cy.contains("[data-handler='selectDay'] a", "14").click();
        //     return true;
        // },
        // {
        //     limit: 12,
        // }
        // );

        cy.get('#sp_description').type('description')
        cy.contains('Pay').click()
    
  });

    it('should try fixtures login', () => { 
        // untuk mengambil data dari file json (fixture)
        cy.fixture("user").then(user => {  
            const username = user.username
            const password = user.password
            
            // untuk memanggil dari custom command yang ada di commands.js
            cy.login(username, password)
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
    });
});