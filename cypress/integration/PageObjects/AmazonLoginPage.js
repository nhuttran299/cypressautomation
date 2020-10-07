class LoginPage
{

visit()
{
    cy.visit("https://www.amazon.com")
    cy.get('#nav-link-accountList').trigger('mouseover')
    cy.get('#nav-signin-tooltip>.nav-action-button').click()
}

fillEmail(value)
{
    const field = cy.get('#ap_email')
    field.clear()
    field.type(value)
    cy.get('#continue').click()
    return this
}

fillPassword(value)
{
    const field = cy.get('#ap_password')
    field.clear()
    field.type(value)
    return this
}

submit()
{
    const button = cy.get('#signInSubmit')
    button.click()
}

}

export default LoginPage
