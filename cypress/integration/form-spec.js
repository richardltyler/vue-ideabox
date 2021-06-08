describe('Form', () => {
  beforeEach(() => {
    cy.fixture('ideas_data.json')
      .then((response) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/ideas', {
          body: response.ideas
        });
      });

    cy.fixture('new_idea_data.json')
      .then((response) => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/ideas', {
          body: response
        });
      });

    cy.visit("http://localhost:8080");
  });

  it('should have a form', () => {
    cy.get('form').should('be.visible');
  });

  it('should have an input for the title', () => {
    cy.get('form input').should('be.visible');
  });

  it('should have a submit button', () => {
    cy.get('form #submit-button').should('be.visible')
      .and('contain', 'SUBMIT');
  });

  it('should add a card at the end of the ideas', () => {
    cy.get('.card').should('have.length', 3);

    cy.get('h2:first').should('contain', 'Prank Travis');

    cy.get('h2:last').should('contain', 'Learn a martial art');

    cy.get('form input').type('test');

    cy.get('form input').should('have.value', 'test');

    cy.get('form #submit-button').click();

    cy.get('.card').should('have.length', 4);

    cy.get('h2:first').should('contain', 'Prank Travis');

    cy.get('h2:last').should('contain', 'test');
  });
});