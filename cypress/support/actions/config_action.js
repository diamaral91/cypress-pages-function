export const vincularCartaoCliente = (account, cartao) => {
    cy.findInFrame("[data-testid='account-id']").type(account)
    
    cy.findInFrame("[data-testid='card-id']").clear({force: true}).type(cartao)

    cy.findInFrame("[data-testid='continue-button']").click()
}

