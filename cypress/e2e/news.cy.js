describe('News', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/news-redux');
  });

  it('loads header correctly', () => {
    cy.get('nav > div > span').should('have.text', 'Hacker news');
    cy.get('button').contains('Change theme').should('exist');
    cy.get('button').contains('Reload').should('exist');
  });

  it('loads news', () => {
    cy.get('a', { timeout: 15000 }).should('have.length', 100);
  });

  it('news item is rendered correctly', () => {
    cy.wait(1000);
    cy.get('a > div > div > div').contains('Author:').should('exist');
    cy.get('a > div > p > div').contains('Rating:').should('exist');
    cy.get('a > div > p > div').should('exist');
  });

  it('goes to the news page', () => {
    cy.get('a').click({ force: true });
    cy.url().should('include', 'http://localhost:3000/news/');
  });
});
