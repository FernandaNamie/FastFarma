describe('Navegação e Funcionalidade', () => {
    /** */
    it('deve carregar a página', () => {
      cy.visit('http://localhost:3000/')
    })
    /** */
    it('deve ter 6 elementos iniciais', () => {
        cy.get('[id="Cards"]').children().should('have.length', 6)
    })
    /** */
    /** */
    it('deve ter 4 elementos iniciais', () => {
      cy.get('[id="card0"]').children().should('have.length', 4)
    })
    /** */
    it('dever ser um numero não negativo', () => {
        cy.get('[id="card0"]')
          .children()
          .last()
          .children()
          .first()
          .click()
          .parent()
          .children()
          .eq(1)
          .invoke('text').then((text) => {
            expect(text.trim()).equal('0')
        });
      })
    /** */
    it('O valor total deve ser a soma dos produtos', () => {
      for (let i = 0; i < 6; i++) {
        cy.get(`[id="card${i}"]`)
          .children()
          .last()
          .children()
          .eq(2)
          .click()
      }
      cy.get(`[id="card0"]`).children().last().children().last().click().get('[class="row"]').last().children()
      .last().invoke('text').then((text) => {
        expect(text.trim()).equal('R$105,00')
       });
    })
  })