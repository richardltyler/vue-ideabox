describe("Card", () => {
  beforeEach(() => {
    cy.fixture('ideas_data.json')
      .then((response) => {
        cy.intercept('http://localhost:3001/api/v1/ideas', {
          body: response.ideas
        });
      });

    cy.visit("http://localhost:8080");
  });

  it("should display a card for each idea", () => {
    cy.get('.card').should('have.length', 3);
  });

  it('should display the title of each idea', () => {
    cy.get('h2').should('have.length', 3)
    
    cy.get('h2:first').should('contain', 'Prank Travis');

    cy.get('h2').eq(1).should('contain', 'Make a secret password app');

    cy.get('h2:last').should('contain', 'Learn a martial art');
  });

  it('should have a delete button on each card', () => {
    cy.get('.delete-button').should('have.length', 3);
  });
});