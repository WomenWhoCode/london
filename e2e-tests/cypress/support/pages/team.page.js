import teamLocatorManager from '../locators/team_page/team_page.locate';

const EXPECTED_NUMBER_TEAM_CARDS = 12; // as of November 5th, 2023

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
  cy.readFile('cypress/fixtures/test_data/team.yml').then((testData) => {
    cy.readFile('../_data/team.yml').then((ymlFile) => {
      expect(testData === ymlFile, 'Files are equal').to.eq(true);
    });
  });
}

export function verifyCollaboratorsData() {
  cy.readFile('cypress/fixtures/test_data/collaborators.yml').then(
    (testData) => {
      cy.readFile('../_data/collaborators.yml').then((ymlFile) => {
        expect(testData === ymlFile, 'Files are equal').to.eq(true);
      });
    }
  );
}
