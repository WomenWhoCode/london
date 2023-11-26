import mentorsLocatorManager from '../locators/mentors_page/mentors_page.locate';

const EXPECTED_NUMBER_MENTORS_CARD = 47; // as of November 18th, 2023
const MENTORS_FILE = 'mentors.yml';
const MENTORS_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + MENTORS_FILE;

export function verifyMentorsDataPresentation() {
  //Copy test data
  cy.copyDataFile(MENTORS_FILE);

  cy.fixture(MENTORS_FILE_PATH).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter disabled mentors
    const filteredMentorData = expectedMentors.filter((item) => !item.disabled);
    mentorsLocatorManager
      .getMentorsCards()
      .should('have.length', filteredMentorData.length)
      .each(($option, index) => {
        const sortedMentor = filteredMentorData[index];
        mentorsLocatorManager.validateMentorByName($option, sortedMentor.name);
        mentorsLocatorManager.validateMentorByPosition(
          $option,
          sortedMentor.position
        );
        mentorsLocatorManager.validateMentorByBio($option, sortedMentor.bio);
      });
  });
}

export function verifyMentorsDataSkills() {
  //Copy test data
  cy.copyDataFile(MENTORS_FILE);

  cy.fixture(MENTORS_FILE_PATH).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter disabled mentors
    const filteredMentorData = expectedMentors.filter((item) => !item.disabled);
    mentorsLocatorManager
      .getMentorsCards()
      .should('have.length', filteredMentorData.length)
      .each(($option, index) => {
        const sortedMentor = filteredMentorData[index];

        mentorsLocatorManager.validateTechExperience(
          $option,
          sortedMentor.skills.experience
        );
        mentorsLocatorManager.validateLanguages(
          $option,
          sortedMentor.languages
        );
        if (sortedMentor.skills.languages) {
          mentorsLocatorManager.validateProgrammingLanguages(
            $option,
            sortedMentor.skills.languages
          );
        }
        mentorsLocatorManager.validateSocialLinks(
          $option,
          sortedMentor.network
        );
      });
  });
}

export function verifyMentorsDataMentees() {
  //Copy test data
  cy.copyDataFile(MENTORS_FILE);

  cy.fixture(MENTORS_FILE_PATH).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter disabled mentors
    const filteredMentorData = expectedMentors.filter((item) => !item.disabled);
    mentorsLocatorManager
      .getMentorsCards()
      .should('have.length', filteredMentorData.length)
      .each(($option, index) => {
        const sortedMentor = filteredMentorData[index];

        mentorsLocatorManager.validateMentoringTypes(
          $option,
          sortedMentor.type
        );
        mentorsLocatorManager.validateAvailableHours(
          $option,
          sortedMentor.hours
        );
        mentorsLocatorManager.validateIdealMentee(
          $option,
          sortedMentor.skills.mentee
        );

        mentorsLocatorManager.validateAreasAndFocus(
          $option,
          sortedMentor.skills.areas,
          sortedMentor.skills.focus
        );

        mentorsLocatorManager.validateExtraMentoringTopics(
          $option,
          sortedMentor.skills.extra
        );
      });
  });
}

export function verifyMentorsUIElements() {
  mentorsLocatorManager.validateMentorsPageHeader();
  mentorsLocatorManager.validateMentorsSearchInput();
  mentorsLocatorManager.validateSearchButton();
  expandAdvancedFilters();
  mentorsLocatorManager.verifyExperienceDropdownValues();
  mentorsLocatorManager.verifyExpertiseDropdownValues();
  mentorsLocatorManager.verifyMenteeFocusDropdownValues();
  mentorsLocatorManager.validateFormatOptions();
  mentorsLocatorManager
    .getMentorsCards()
    .should('have.length', EXPECTED_NUMBER_MENTORS_CARD);
  mentorsLocatorManager.validatePresentationTab();
  mentorsLocatorManager.validateSkillsTab();
  mentorsLocatorManager.validateMenteesTab();
}

export function typeInSearchMentorsInput(mentorsInput) {
  mentorsLocatorManager.getMentorsSearchInput().clear().type(mentorsInput);
}

export function validateActiveSearchMentorsField(mentorsInput) {
  mentorsLocatorManager
    .getMentorsSearchInput()
    .should('have.value', mentorsInput);
}

export function validateSingleSearchResult(searchQuery) {
  cy.fixture(MENTORS_FILE_PATH).then((file) => {
    const expectedMentors = YAML.parse(file);
    const filteredMentorData = expectedMentors.filter((item) =>
      item.name.includes(searchQuery)
    );
    mentorsLocatorManager
      .getMentorsCards()
      .should('have.length', filteredMentorData.length);
  });
}

export function validateMultipleSearchResult(numberMentors) {
  mentorsLocatorManager
    .getMentorsCards()
    .filter(':has(> :first-child)')
    .should('have.length', numberMentors);
}

export function clickSearchButton() {
  mentorsLocatorManager.getSearchButton().click();
}

export function validateNoMentorsMessage() {
  mentorsLocatorManager.validateNoMentorsMessage();
}

export function clearSearchInput() {
  mentorsLocatorManager.getMentorsSearchInput().clear();
  mentorsLocatorManager.getMentorsSearchInput().should('have.value', '');
  mentorsLocatorManager.validateMentorsSearchInput();
}

export function verifyAllMentorsExistOnPage() {
  cy.fixture(MENTORS_FILE_PATH).then((file) => {
    const expectedMentors = YAML.parse(file);
    const filteredMentorData = expectedMentors.filter((item) => !item.disabled);
    mentorsLocatorManager
      .getMentorsCards()
      .filter(':has(> :first-child)')
      .should('have.length', filteredMentorData.length);
  });
}

export function expandAdvancedFilters() {
  mentorsLocatorManager.getAdvancedFiltersButton().click();
}

export function setFilterOption(option, filterName) {
  const filterNameLower = filterName.toLowerCase();
  switch (filterNameLower) {
    case 'experience':
      mentorsLocatorManager.getExperienceDropdown().select(option);
      break;
    case 'expertise':
      mentorsLocatorManager.getExpertiseDropdown().select(option);
      break;
    case 'mentee focus':
      mentorsLocatorManager.getMenteeFocusDropdown().select(option);
      break;
    case 'format':
      mentorsLocatorManager.getFormatDropdown().select(option);
      break;
    case 'default':
      break;
  }
}

export function getClearAllFiltersButton() {
  mentorsLocatorManager.getClearAllFiltersButton().click();
}
