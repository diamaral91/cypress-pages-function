import dadoscliente from '../../fixtures/dadoscliente.json'

export const preencherDadosEndereco = () => {
    cy.findInFrame("div[role='dialog'] > div > button").click()
    cy.findInFrame("[data-testid='postCode']") .clear({force: true}).type(dadoscliente.endereco.cep)
    cy.findInFrame("[data-testid='number']").clear({force: true}).type(dadoscliente.endereco.numero)
    
    cy.findInFrame("[data-testid='additionalAtribute']").clear({force: true}).type(dadoscliente.endereco.complemento)
        .type('{alt+i}')

    cy.getText("div[role='dialog'] > div > p")
    
    cy.findInFrame("div[role='dialog'] > div > button").click()
}

export const preencherDadosContato = () => {
    cy.findInFrame("[data-testid='email']").clear({force: true}).type(dadoscliente.contato.email)
    cy.findInFrame("[data-testid='phone']").clear({force: true}).type(dadoscliente.contato.fone)
    cy.findInFrame("[data-testid='save-button']").click()
    cy.findInFrame("[data-testid='btn-confirm']").click()
}

