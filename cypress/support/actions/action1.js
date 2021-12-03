export const iniciar = () => {
    cy.get("//span[text()='Iniciar']").click()
    cy.get("//span[text()='Continuar']").click()
    cy.get("[data-testid='tips-action']").click()
    cy.get("[data-testid='tips-action']").click()
}

