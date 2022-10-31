Cypress.Commands.add('changeTheme', (type) => {
  cy.get('#root').contains('Change theme').click();
});
