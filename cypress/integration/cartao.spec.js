import { criarAtendimento } from '../support/actions/home_action';
import { continuarSemConsulta } from '../support/actions/dataprev_action'
import { marcarCartaocredito } from '../support/actions/ofertas_action'
import { vincularCartaoCliente } from '../support/actions/configuracaoproduto_action'
import { preencherDadosEndereco, preencherDadosContato } from '../support/actions/dadoscliente_action'
import { selecionarMensagemTexto } from '../support/actions/enviodocumentos_action'
import { reenviarMensagem } from '../support/actions/documentosdistancia_action'
import { iniciar } from '../support/actions/assinaturadigital_action'

describe('criar atendimento', () => {

  it('validar cartão benefício', () => {
    cy.visit('/')

    criarAtendimento('1234567')
    continuar()
    marcar()
    vincular('00000', '11111')
    preencher()
    preencherDados()
    selecionar()
    reenviar()
  })

  it('checklist', () => {
    cy.visit(`${Cypress.env('apiUrl')}/${Cypress.env('codUrl')}`)

    iniciar()  
  })

})