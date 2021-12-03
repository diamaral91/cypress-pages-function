import atendimento from '../../fixtures/atendimento.json'

export const criarAtendimento = (cpfCliente) => {
    cy.get("[data-testid='cpf']").clear({force: true}).type(atendimento.cpfAtendente)
    cy.get("[data-testid='store-id']").clear({force: true}).type(atendimento.storeID)
    cy.get("[data-testid='cpf-cliente']").clear({force: true}).type(cpfCliente)
    cy.get("[data-testid='user-id']").clear({force: true}).type(atendimento.userID)

    cy.xpath("//button/span[text()='Criar Atendimento']").click()

    const apiUrl = Cypress.env('apiUrl')
    cy.intercept('POST', `${apiUrl}/v1/project/attendances`, {
      statusCode: 201,
      body: {
        name: 'Peter Pan',
      },
    })
}
