const SUCCESS_STATUS_CODE = 200;
const YAML = require('yamljs');


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

Cypress.Commands.add('copyDataFile', (fileName) => {
  const testDataPath = Cypress.config('testDataTemporaryFolder') + fileName;
  const sourcePath = Cypress.config('sourceDataFolder') + fileName;
  
  cy.readFile(sourcePath).then((file) => {
    const expectedResources = YAML.parse(file);
    const yamlString = YAML.stringify(expectedResources);
    cy.writeFile(testDataPath, yamlString);
  });
});

afterEach(() => {
  cy.task('deleteDataTempFolder', Cypress.config('testDataTemporaryFolder'))
});