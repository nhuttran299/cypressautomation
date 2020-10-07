/// <reference types="cypress" />

import LoginPage from '../PageObjects/AmazonLoginPage'

describe('Login function', function(){

    before(function(){

        cy.fixture('account').then(function(data){
            
            this.data = data

        })

    })

    it("Verify error message displays when logging in with invalid password", function(){

        const lp=new LoginPage
        lp.visit()
        lp.fillEmail(this.data.v_email)
        lp.fillPassword(this.data.i_password)
        lp.submit()
        cy.get('#auth-error-message-box').should('exist')
        
    })

})