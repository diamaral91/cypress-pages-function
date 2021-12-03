export const selecionarMensagemTexto = () => {
    cy.findInFrame("label:nth-child(2) > div > div > h1").click()
    cy.findInFrame("[data-testid='button-continue']").click()
}
