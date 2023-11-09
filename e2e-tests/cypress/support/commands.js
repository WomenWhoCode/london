const SUCCESS_STATUS_CODE = 200;


Cypress.Commands.add('shouldBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('validateLink', (subject, linkLocator, expectedLink) => {
  cy.wrap(subject).find(linkLocator)
    .should('have.attr', 'href', expectedLink)
    .then(link => {
      cy
      .request(link.prop('href'))
      .its('status')
      .should('eq', SUCCESS_STATUS_CODE);
    });
});
