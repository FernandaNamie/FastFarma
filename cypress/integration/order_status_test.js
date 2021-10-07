describe('Navegação e Funcionalidade', () => {
    /** */
    it('deve carregar a página', () => {
        cy.visit('http://localhost:3000/cliente')
    })
    /** */
    it('lista de produtos deve ter 2 elementos iniciais', () => {
        cy.get('[id="products"]').children().should('have.length', 2)
    })
    /** */
    it('preço do primeiro produto', () => {
        cy.get('[id="product-0"]').invoke('attr', 'price').should('eq', '20')
    })
    /** */
    it('quantidade do primeiro produto', () => {
        cy.get('[id="product-0"]').invoke('attr', 'amount').should('eq', '1')
    })
    /** */
    it('preço do segundo produto', () => {
        cy.get('[id="product-1"]').invoke('attr', 'price').should('eq', '5')
    })
    /** */
    it('quantidade do segundo produto', () => {
        cy.get('[id="product-1"]').invoke('attr', 'amount').should('eq', '2')
    })
    /** */
    it('preço do frete', () => {
        cy.get('[id="frete"]').invoke('attr', 'frete').should('eq', '6')
    })
    /** */
    it('preço total da compra', () => {
        cy.get('[id="total"]').invoke('attr', 'total').should('eq', '36')
    })
    /** */
})