import Homepage from '../PageObjects/AmazonHomepage'

class ListingPage
{
visit()
{
    
}
sort(value)
{
    cy.get('span.a-dropdown-container').click()
    cy.get('ul.a-list-link > li > a').contains(value).click()
}

dropdown()
{
    cy.get('span.a-dropdown-container')
    return this
}


}

export default ListingPage