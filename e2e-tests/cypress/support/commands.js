const SUCCESS_STATUS_CODE = 200;
const TEMPORARY_TEST_FOLDER = Cypress.config('temporaryFolderAbsolutePath');
const SOURCE_TEST_FOLDER = Cypress.config('sourceDataFolder');
const YAML = require('yamljs');
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';


Cypress.Commands.add('shouldBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('shouldNotBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('not.be.visible');
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

Cypress.Commands.add('compareScreenshotWithRef', (options) => {
  const nameDir = options?.nameDir;
  const element = options?.element;
  const fullName = nameDir.replace('cypress/e2e/', '');
    return cy.get(element).matchImageSnapshot(fullName);
});

addMatchImageSnapshotCommand({
  customSnapshotsDir: 'cypress/visual_testing/baseImage',
  customDiffDir: 'cypress/visual_testing/diff',
  failureThreshold: 0.015, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.05 }, // threshold for each pixel
});

afterEach(() => {
  cy.task('deleteDataTempFolder', TEMPORARY_TEST_FOLDER);
});