describe('news page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/news/33112818');

    cy.intercept({
      method: 'GET',
      url: 'https://hacker-news.firebaseio.com/v0/item/33112818.json'
    }).as('loadNews');
  });

  it('loads header correctly', () => {
    cy.get('button').contains('Change theme').should('exist');
    cy.get('button').contains('Reload').should('exist');
    cy.get('button').contains('Back').should('exist');
  });

  it('loads news data correctly', () => {
    cy.wait('@loadNews').then((interception) => {
      const { by, descendants, time, title, kids } = interception.response.body;
      cy.get('#root').contains(`"${title}" by ${by}`).should('exist');
      cy.get('#root').contains(`Comments (${descendants}):`).should('exist');
      cy.get('#root')
        .contains(new Date(time * 1000).toDateString())
        .should('exist');

      cy.wait(1000);
      cy.get('div > div > strong').should('have.length', kids.length);
    });
  });

  it('clicks Back button', () => {
    cy.get('#root').contains('Back').click({ force: true });
    cy.url().should('eq', 'http://localhost:3000/news-redux');
  });

  it('clicks opens nested comments', () => {
    cy.wait('@loadNews').then((interception) => {
      cy.get('div >div > strong').contains('noobermin').click();
      cy.wait(1000);
      cy.get('div > div > strong').contains('cguess').should('exist');
    });
  });
});
