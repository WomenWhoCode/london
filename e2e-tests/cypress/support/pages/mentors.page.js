import mentorsLocatorManager from '../locators/mentors_page/mentors_page.locate';

const EXPECTED_NUMBER_MENTORS_CARD = 51; // as of October 7th, 2023
const MENTORS_FILE = 'temporary/mentors.yml';

// export function verifyMentorsData() {
//   cy.copyDataFile('mentors.yml');

//   mentorsLocatorManager.validateMentorsCards();
// }

export function verifyMentorsData() {
  //Copy test data
  cy.copyDataFile('mentors.yml');

  cy.fixture(MENTORS_FILE).then((file) => {
    //Parse and sort YAML data to be the same with the website
    const expectedEvents = YAML.parse(file);
    expectedEvents.sort((a, b) => {
      const hoursDiff = b.hours - a.hours;
      return hoursDiff !== 0 ? hoursDiff : b.index - a.index;
    });
    //Filter zero hours mentors
    const hoursZeroObjectsFilter = expectedEvents.filter(
      (entry) => entry.hours === 0
    );
    const zeroHours = hoursZeroObjectsFilter.length;
    const nonZeroMentors = expectedEvents.length - zeroHours;

    mentorsLocatorManager.getMentorsCards()
      .should('have.length', nonZeroMentors)
      .each(($option, index) => {
        const sortedMentor = expectedEvents[index];
        mentorsLocatorManager.validateMentorByName($option, sortedMentor.name);
        mentorsLocatorManager.validateMentorByPosition($option, sortedMentor.position);
        mentorsLocatorManager.validateMentorByBio($option, sortedMentor.bio);
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
