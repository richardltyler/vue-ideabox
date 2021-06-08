describe("App", () => {
  beforeEach(() => {
    
    cy.fixture('ideas_data.json')
    .then((response) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/ideas', {
        body: response.ideas
      })
    });

    cy.visit("http://localhost:8080");
  });

  it("should be there", () => {
    cy.get('#app').should('be.visible');
  });
});