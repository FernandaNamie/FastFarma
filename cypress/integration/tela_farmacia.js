describe("Navegação e Funcionalidade", () => {
  /** */
  it("deve carregar a página", () => {
    cy.visit("http://localhost:3000/farmacia");
  });
  /** */
  it("deve ter 2 pedidos de clientes", () => {
    cy.get('[class="col-6"]')
      .children()
      .get('[class="ClientName"')
      .should("have.length", 2);
  });

  it("deve ter horário de entrega", () => {
    cy.get('[id="deliveryTime"]').should("have.length", 1);
  });

  it("deve ter 2 produtos no pedido selecionado", () => {
    cy.get('[class="row align-items-start"]').should("have.length", 2);
  });

  it("preço do primeiro produto deve ser 50 reais", () => {
    cy.get('[class="container"]')
      .children('[class="row align-items-start"]')
      .children('[class="col"]')
      .should("contain", 50);
  });

  it("preço do segundo produto deve ser 25 reais", () => {
    cy.get('[class="container"]')
      .children('[class="row align-items-start"]')
      .children('[class="col"]')
      .should("contain", 25);
  });

  it("preço do frete deve ser 6 reais", () => {
    cy.get('[class="row justify-content-end"]')
      .children('[class="col-3"]')
      .children()
      .should("contain", 6);
  });

  it("preço total deve ser 106 reais", () => {
    cy.get('[class="row justify-content-end"]')
      .children('[class="col-3"]')
      .children()
      .should("contain", 106);
  });

  it("pedido ainda não aceito/recusado, botões existem", () => {
    cy.get('[id="buttons"]').children().should("have.length", 2);
  });

  it("seleciona outro pedido na sidebar", () => {
    cy.get('[class="col-3 ClientData "]').last().click();
  });

  it("pedido aceito/recusado, botões não existem", () => {
    cy.get('[id="buttons"]').children().should("have.length", 0);
  });
});
