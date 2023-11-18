import teamLocatorManager from '../locators/team_page/team_page.locate';

const EXPECTED_NUMBER_TEAM_CARDS = 12; // as of November 5th, 2023
const COLLABORATORS_FILE = 'temporary/collaborators.yml';
const TEAM_FILE = 'temporary/team.yml';

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
  cy.copyDataFile('team.yml');
  cy.fixture(TEAM_FILE).then((file) => {
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
  cy.copyDataFile('collaborators.yml');
  cy.fixture(COLLABORATORS_FILE).then((file) => {
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
