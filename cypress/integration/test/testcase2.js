/// <reference types="cypress" />

import LoginPage from '../PageObjects/AmazonLoginPage'
import HomePage from '../PageObjects/AmazonHomePage'


describe('Login function', function(){

    before(function(){

        cy.fixture('account').then(function(data){
            
            this.data = data

        })

    })
    

    it("Verify user can login successfully", function(){

        const lp=new LoginPage
        const hp=new HomePage
        lp.visit()
        lp.fillEmail(this.data.v_email)
        lp.fillPassword(this.data.v_password)
        lp.submit()
        cy.get('#nav-link-accountList').should('exist')
        
    })


})