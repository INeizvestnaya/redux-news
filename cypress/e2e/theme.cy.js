describe('theme', () => {
  it('changes theme for background', () => {
    cy.visit('http://localhost:3000/news-redux');

    cy.get('#root > div').should('have.class', 'bg-white');

    cy.changeTheme();

    cy.get('#root > div').should('have.class', 'bg-secondary');
  });

  it('changes theme for news list', () => {
    cy.visit('http://localhost:3000/news-redux');

    cy.get('a').should('have.class', 'text-dark');
    cy.get('a > div').should('have.class', 'bg-light');

    cy.changeTheme();

    cy.get('a').should('have.class', 'text-light');
    cy.get('a > div').should('have.class', 'bg-dark');
  });

  it('changes theme for header buttons', () => {
    cy.visit('http://localhost:3000/news-redux');

    cy.get('button').should('have.class', 'btn-light');

    cy.changeTheme();

    cy.get('button').should('have.class', 'btn-secondary');
  });

  it('changes theme for text on news page', () => {
    cy.visit('http://localhost:3000/news/33112818');

    cy.get('#root > div > div').should('have.class', 'text-dark');

    cy.changeTheme();

    cy.get('#root > div > div').should('have.class', 'text-light');
  });

  it('changes theme for button on news page', () => {
    cy.visit('http://localhost:3000/news/33112818');

    cy.get('div > button').should('have.class', 'btn-light');

    cy.changeTheme();

    cy.get('div > button').should('have.class', 'btn-dark');
  });

  it('changes theme for button on comments', () => {
    cy.visit('http://localhost:3000/news/33112818');

    cy.get('div > div > div').should('have.class', 'bg-light text-dark');

    cy.changeTheme();

    cy.get('div > div > div').should('have.class', 'bg-dark text-light');
  });
});
