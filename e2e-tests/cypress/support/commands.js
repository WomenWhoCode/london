const SUCCESS_STATUS_CODE = 200;
const TEMPORARY_TEST_FOLDER = Cypress.config('temporaryFolderAbsolutePath');
const SOURCE_TEST_FOLDER = Cypress.config('sourceDataFolder');
const YAML = require('yamljs');


Cypress.Commands.add('shouldBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('validateLink', (subject, linkLocator, expectedLink) => {
  cy.wrap(subject)
    .find(linkLocator)
    .should('have.attr', 'href', expectedLink)
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', SUCCESS_STATUS_CODE);
    });
});

Cypress.Commands.add('copyDataFile', (fileName) => {
  const testDataPath = TEMPORARY_TEST_FOLDER + fileName;
  const sourcePath = SOURCE_TEST_FOLDER + fileName;

  cy.readFile(sourcePath).then((file) => {
    const expectedResources = YAML.parse(file);
    const yamlString = YAML.stringify(expectedResources);
    cy.writeFile(testDataPath, yamlString);
  });
});

afterEach(() => {
  cy.task('deleteDataTempFolder', TEMPORARY_TEST_FOLDER);
});
