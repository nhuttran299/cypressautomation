import Homepage from '../PageObjects/AmazonHomePage'
/// <reference types="cypress" />

import HomePage from '../PageObjects/AmazonHomePage'
import ListingPage from '../PageObjects/AmazonListingPage'


describe('Seaching', function(){

    it("Verify the result list can be sort on demand", function(){

        const hp=new Homepage
        const listp=new ListingPage
        hp.visit()
        hp.search("Books","apple","English")
        listp.sort("Publication Date")
        cy.get('span.a-dropdown-container').should('contain',"Publication Date")
        
        
    })


})