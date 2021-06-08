describe("Ideas", () => {
  beforeEach(() => {
    cy.fixture('ideas_data.json')
      .then((response) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/ideas', {
          body: response.ideas
        });
      });

    cy.visit("http://localhost:8080");
  });

  it('should have an ideas area', () => {
    cy.get("main").should('be.visible');
  });

  it('should have a card for each idea', () => {
    cy.get(".card").should('have.length', 3)
  });
})