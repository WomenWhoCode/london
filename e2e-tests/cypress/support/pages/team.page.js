import teamLocatorManager from '../locators/team_page/team_page.locate';

const EXPECTED_NUMBER_TEAM_CARDS = 12; // as of November 5th, 2023
const COLLABORATORS_FILE = 'collaborators.yml';
const COLLABORATORS_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + COLLABORATORS_FILE
const TEAM_FILE = 'team.yml';
const TEAM_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + TEAM_FILE


export function verifyTeamPageUIElements() {
  teamLocatorManager.validateTeamHeader();
  teamLocatorManager.validateCollaboratorsHeader();
  teamLocatorManager.validateJoinMessage();
  teamLocatorManager.validateLearnMoreButton();
  teamLocatorManager
    .getAllTeamCards()
    .should('have.length', EXPECTED_NUMBER_TEAM_CARDS);
}

export function verifyTeamData() {
  cy.copyDataFile(TEAM_FILE);
  cy.fixture(TEAM_FILE_PATH).then((file) => {
    const expectedData = YAML.parse(file);
    teamLocatorManager.getCoreTeamCards()
      .should('have.length', expectedData.length)
      .each(($option, index) => {
        teamLocatorManager.validateCoreTeamNames($option, expectedData, index);
        teamLocatorManager.validateCoreTeamPositions($option, expectedData, index);
        teamLocatorManager.validateCoreTeamComments($option, expectedData, index);
        teamLocatorManager.validateCoreTeamSocialNetwork($option, expectedData[index].network);      
      });
  });
}

export function verifyCollaboratorsData() {
  cy.copyDataFile(COLLABORATORS_FILE);
  cy.fixture(COLLABORATORS_FILE_PATH).then((file) => {
    const expectedData = YAML.parse(file);
    teamLocatorManager.getCollaboratorsCards()
      .should('have.length', expectedData.length)
      .each(($option, index) => {
        teamLocatorManager.validateCollaboratorsNames($option, expectedData, index);
        teamLocatorManager.validateCollaboratorsPositions($option, expectedData, index);
        teamLocatorManager.validateCollaboratorsComments($option, expectedData, index);
        teamLocatorManager.validateCollaboratorsSocialNetworks($option, expectedData[index].network, index);
      });
  });
}
