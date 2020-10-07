class Homepage
{

visit()
{
    cy.visit("https://www.amazon.com")
}

selectDepartment(value)
{
    cy.get('#searchDropdownBox').should('be.visible').select(value,{force: true})
    return this
}

enterKeyword(value){
    cy.get('#twotabsearchtextbox').type(value)
    return this
}
selectLanguage(value){
    if (value == 'English')
        return this
}

search(department,keyword,language){
    this.selectDepartment(department)
    this.enterKeyword(keyword)
    this.selectLanguage(language)
    cy.get('#nav-search-submit-text').click()

}

}
export default Homepage