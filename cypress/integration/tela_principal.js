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
    /** */
    it('deve preencher o formulário e incluir "Tarefa Nova"', () => {
      const tarefa = 'Tarefa Nova'
      cy.get('[id="formulario_todo"]').type(tarefa).should('have.value', tarefa)
      cy.get('[id="formulario_todo_button"]').click()
    })
    /** */
    it('deve conter 4 elementos após a inclusão', () => {
      cy.get('[id="listaTodos"]').children().should('have.length', 4)
    })
    /** */
    it('deve eliminar a primeira tarefa', () => {
      cy.get('[id="listaTodos"]')
        .children()
        .first()
        .children()
        .last()
        .children()
        .last()
        .click()
    })
    /** */
    it('deve ter três elementos após a eliminação do primeiro', () => {
      cy.get('[id="listaTodos"]').children().should('have.length', 3)
    })
    it('deve mostrar mensagem de lista vazia após eliminação das tarefas', () => {
      const mensagem = 'a Todo-List está vazia, adicione uma tarefa...'
      for (let i = 0; i < 3; i++) {
        cy.get('[id="listaTodos"]')
          .children()
          .first()
          .children()
          .last()
          .children()
          .last()
          .click()
      }
      cy.get('[id="listaVazia"').should('contain', mensagem)
    })
  })