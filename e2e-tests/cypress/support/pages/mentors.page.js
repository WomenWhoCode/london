import mentorsLocatorManager from '../locators/mentors_page/mentors_page.locate';

const EXPECTED_NUMBER_MENTORS_CARD = 51; // as of October 7th, 2023

export function verifyMentorsData() {
  cy.readFile('cypress/fixtures/test_data/mentors.yml').then((testData) => {
    cy.readFile('../_data/mentors.yml').then((ymlFile) => {
      expect(testData === ymlFile, 'Files are equal').to.eq(true);
    });
  });
}

export function verifyMentorsUIElements() {
  mentorsLocatorManager.validateMentorsPageHeader();
  mentorsLocatorManager.validateKeywordInput();
  mentorsLocatorManager.verifyExperienceDropdownValues();
  mentorsLocatorManager.verifyAreaDropdownValues();
  mentorsLocatorManager.verifyMenteeFocusDropdownValues();
  mentorsLocatorManager.validateLongTermRadiobutton();
  mentorsLocatorManager.validateAdHocRadiobutton();
  mentorsLocatorManager
    .getMentorsCards()
    .should('have.length', EXPECTED_NUMBER_MENTORS_CARD);
  mentorsLocatorManager.validatePresentationTab();
  mentorsLocatorManager.validateSkillsTab();
  mentorsLocatorManager.validateMenteesTab();
}
