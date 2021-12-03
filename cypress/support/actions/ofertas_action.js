export const marcarCartaocredito = () => {
    cy.findInFrame('div:nth-child(2) > div > div:nth-child(1) > div > h1').click()

    cy.findInFrame("[data-testid='accept-offer']").click()
}

