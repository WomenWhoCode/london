import mentorsLocatorManager from '../locators/mentors_page/mentors_page.locate';

const EXPECTED_NUMBER_MENTORS_CARD = 47; // as of November 18th, 2023
const MENTORS_FILE = 'temporary/mentors.yml';

export function verifyMentorsDataPresentation() {
  //Copy test data
  cy.copyDataFile('mentors.yml');

  cy.fixture(MENTORS_FILE).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter zero hours mentors
    const filteredMentorData = expectedMentors.filter(item => !item.disabled);
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
  cy.copyDataFile('mentors.yml');

  cy.fixture(MENTORS_FILE).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter zero hours mentors
    const filteredMentorData = expectedMentors.filter(item => !item.disabled);
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
  cy.copyDataFile('mentors.yml');

  cy.fixture(MENTORS_FILE).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedMentors = YAML.parse(file);
    expectedMentors.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter zero hours mentors
    const filteredMentorData = expectedMentors.filter(item => !item.disabled);
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
  mentorsLocatorManager.validateKeywordInput();
  mentorsLocatorManager.getToggleAdvancedFiltersButton().click();
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
