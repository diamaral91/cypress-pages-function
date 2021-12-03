

describe('criar atendimento', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('validar cartão benefício', () => {
    cy.request({
      method: 'POST',
      url: 'http://project-service-comercial-hom.in/v1/messages', // baseUrl is prepended to url
      headers: messages.header,
      body: messages.body
    }).its('body.messageParameters.{checklist_url}')
    .then((checklist_url) => {
      cy.log(checklist_url)
    })
  })
})