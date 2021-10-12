describe('Navegação e Funcionalidade', () => {
    /** */
    it('deve carregar a página', () => {
        cy.visit('http://localhost:3000/cliente')
    })
    /** */
    it('lista de produtos deve ter 2 elementos iniciais', () => {
        cy.fixture('pedido').then((pedido) => {
            cy.get('[id="products"]').children().should('have.length', pedido.products.length)
        })
    })
    /** */
    it('preço do primeiro produto', () => {
        cy.fixture('pedido').then((pedido) => {
            cy.get('[id="product-0"]').invoke('attr', 'price').should('eq', pedido.products[0].price.toString())
        })
    })
    /** */
    it('quantidade do primeiro produto', () => {
        cy.fixture('pedido').then((pedido) => {
            cy.get('[id="product-0"]').invoke('attr', 'amount').should('eq', pedido.products[0].amount.toString())
        })
    })
    /** */
    it('preço do segundo produto', () => {
        cy.fixture('pedido').then((pedido) => {
            cy.get('[id="product-1"]').invoke('attr', 'price').should('eq', pedido.products[1].price.toString())
        })
    })
    /** */
    it('quantidade do segundo produto', () => {
        cy.fixture('pedido').then((pedido) => {
            cy.get('[id="product-1"]').invoke('attr', 'amount').should('eq', pedido.products[1].amount.toString())
        })
    })
    /** */
    it('preço do frete', () => {
        cy.get('[id="frete"]').invoke('attr', 'frete').should('eq', '6')  // valor fixado
    })
    /** */
    it('preço total da compra', () => {
        cy.fixture('pedido').then((pedido) => {
            let product0 = pedido.products[0].price * pedido.products[0].amount
            let product1 = pedido.products[1].price * pedido.products[1].amount
            const frete = 6 // valor fixado
            let total = product0 + product1 + frete
            cy.get('[id="total"]').invoke('attr', 'total').should('eq', total.toString())
        })
    })
    /** */
})