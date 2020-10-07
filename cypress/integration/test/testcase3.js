/// <reference types="cypress" />

import HomePage from '../PageObjects/AmazonHomePage'

describe('Seaching', function(){

    it("Verify the result display exactly 16 items on each page", function(){

        const hp=new HomePage
        hp.visit()
        hp.search("Books","apple","English")
        cy.get('img.s-image').should('have.length','16')
        cy.get('li.a-normal').should('be.visible')
    })


})