import messages from '../../fixtures/instant-messages.json'

export const reenviarMensagem = () => {
    cy.findInFrame('.qrcode').should('be.visible')
        
    cy.wait(65000) // aguardar 1min para reenvio da mensagem
    cy.findInFrame('a.link.is-blue').click()

    const apiUrl = Cypress.env('apiUrl')
    const codAtendimento = Cypress.env('codAtendimento')
    cy.request({
        method: 'POST',
        url: `${apiUrl}/v1/attendances/${codAtendimento}/instant-messages`,
        headers: messages.header,
        body: messages.body,
      }).its('body.messageParameters.{checklist_url}')
      .then((checklist_url) => {
        Cypress.env('codUrl', checklist_url)
    })
}

