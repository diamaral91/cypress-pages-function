Cypress.Commands.add('findInFrame', (value) => {
    return cy.iframe("[title='Simulador']", {timeout: Cypress.env('timeout')})
    .should('be.visible')
    .find(value, {timeout: Cypress.env('timeout')})
})

Cypress.Commands.add('getText', (value) => {
    return cy.iframe("[title='Simulador']", {timeout: Cypress.env('timeout')})
    .should('be.visible')
    .find(value, {timeout: Cypress.env('timeout')}).invoke('text')
    .then(($atendimento) => {
        var infos = $atendimento.split(':')
        var numero = infos[1].replace('Originação', '')
        Cypress.env('codAtendimento', numero)
    })
})