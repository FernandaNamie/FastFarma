describe('Navegação e Funcionalidade', () => {
  it('deve carregar a página de motoboy', () => {
    cy.visit('http://localhost:3000/motoboy')
  })

  it('deve ter 2 pedidos de clientes', () => {
    cy.get('[class="col-6"]').children()
        .get('[class="ClientName"')
        .should('have.length', 2)
  })

  it('deve ter endereço de origem', () => {
    cy.get('[id="enderecoOrigem"]')
        .should('have.length', 1)
  })

  it('deve ter endereço de destino', () => {
    cy.get('[id="enderecoDestino"]')
        .should('have.length', 1)
  })

  it('deve ter horário de entrega', () => {
    cy.get('[id="previsaoEntrega"]')
        .should('have.length', 1)
  })

  it('deve ter 2 produtos no pedido selecionado', () => {
    cy.get('[class="row align-items-start"]')
        .should('have.length', 2)
  })

  it('preço do primeiro produto deve ser 50 reais', () => {
    cy.get('[id="price0"]')
        .should('contain', 50)
  })

  it('preço do segundo produto deve ser 25 reais', () => {
    cy.get('[id="price1"]')
        .should('contain', 25)
  })
  
  it('preço do frete deve ser 6 reais', () => {
    cy.get('[id="freteMotoboy"]')
        .should('contain', 6)
  })

  it('preço total deve ser 106 reais', () => {
    cy.get('[id="valorTotal"]')
        .should('contain', 106)
  })
})