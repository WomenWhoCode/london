const ALERT = ':nth-child(3) > .alert';
const KEYWORD_INPUT = '#keywords';
const SEARCH_BUTTON = '#search'
const EXPERIENCE_DROPDOWN = '#experience';
const EXPERTISE_DROPDOWN = '#area';
const MENTEE_FOCUS = '#focus';
const FORMAT_DROPDOWN = '#type';

const MENTORS_CARDS = '.card:not(.d-none)';

const PRESENTATION_TAB = '.presentation';
const MENTORS_TITLE = '.card-title';
const MENTORS_POSITION = '.card-presentation > .position';
const PRESENTATION_CARD = '.card-presentation > .card-text';
const SHOW_MORE_BUTTON = '.card-presentation > .show-more';
const SKILLS_TAB = '.skills';
const SKILLS_CARD = '.card-skills';
const NETWORK_LINKS = '.network';
const MENTEES_TAB = '.mentees';
const MENTEES_CARD = '.card-mentees > .card-text';

const TOGGLE_ADVANCED_FILTERS = '#toggle-filters';
const CLEAR_ALL_FILTERS = '#clear-btn';
const NO_MENTORS_FOUND = '#no-mentors-msg'


class mentorsLocatorManager {
  validateMentorsAlert = () => {
    return cy
      .get(ALERT)
      .shouldBeVisible()
      .should(
        'contain',
        ' Dear mentors and mentees, we would like to inform you that we will be concluding Mentorship Programme 4.0 in November, and there will be no further ad-hoc sessions from November onwards this year. We deeply appreciate your active participation and  we look forward to seeing you again next year!'
      );
  };

  validateMentorsPageHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible()
      .should('contain', 'Meet our community of mentors!');
  };

  //Search section
  getMentorsSearchInput = () => {
    return cy
      .get(KEYWORD_INPUT)
      .shouldBeVisible();
  };

  validateMentorsSearchInput = () => {
    return cy
      .get(KEYWORD_INPUT)
      .shouldBeVisible()
      .should('have.attr', 'placeholder', 'Search by mentor’s name...');
  };

  getSearchButton = () => {
    return cy.get(SEARCH_BUTTON).shouldBeVisible();
  };

  validateSearchButton = () => {
    return cy.get(SEARCH_BUTTON).shouldBeVisible().should('contain', 'Search');
  };

  getExperienceDropdown = () => {
    return cy.get(EXPERIENCE_DROPDOWN).shouldBeVisible();
  };
  
  getExpertiseDropdown = () => {
    return cy.get(EXPERTISE_DROPDOWN).shouldBeVisible();
  };

  getMenteeFocusDropdown = () => {
    return cy.get(MENTEE_FOCUS).shouldBeVisible();
  };

  getFormatDropdown = () => {
    return cy.get(FORMAT_DROPDOWN).shouldBeVisible();
  };

  getAdvancedFiltersButton = () => {
    return cy.get(TOGGLE_ADVANCED_FILTERS).shouldBeVisible();
  };

  getClearAllFiltersButton = () => {
    return cy.get(CLEAR_ALL_FILTERS).shouldBeVisible();
  };

  validateNoMentorsMessage = () => {
    const message = "Sorry, no mentors matching your search criteria were found. Please, adjust your filters and try again.";
    return cy.get(NO_MENTORS_FOUND).shouldBeVisible().should('contain', message);
  };
   
  verifyExperienceDropdownValues = () => {
    cy.fixture('test_data/mentor_experience.json').then((file) => {
      const options = file.experienceOptions;
      this.getExperienceDropdown()
        .children('option')
        .should('have.length', options.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', options[index].label);
        });
    });
  };

  verifyExpertiseDropdownValues = () => {
    cy.fixture('test_data/mentor_expertise.json').then((expertises) => {
      const options = expertises.expertOptions;
      cy.get(EXPERTISE_DROPDOWN)
        .children('option')
        .should('have.length', options.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', options[index].label);
        });
    });
  };

  verifyMenteeFocusDropdownValues = () => {
    cy.fixture('test_data/mentee_focus.json').then((options) => {
      const menteeOptions = options.menteeOptions;
      this.getMenteeFocusDropdown()
        .children('option')
        .should('have.length', menteeOptions.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', menteeOptions[index].label);
        });
    });
  };

  validateFormatOptions = () => {
    cy.fixture('test_data/mentor_formats.json').then((formats) => {
      const formatOptions = formats.formatOptions;
      cy.get(FORMAT_DROPDOWN)
        .children('option')
        .should('have.length', formatOptions.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', formatOptions[index].label);
        });
    });
  };

  validateAdHocRadiobutton = () => {
    return cy.get(AD_HOC_RADIOBUTTON).find('label').should('contain', 'Ad-Hoc');
  };

  //Mentors cards
  validatePresentationTab = () => {
    return cy
      .get(PRESENTATION_TAB)
      .shouldBeVisible()
      .should('contain', 'Presentation');
  };

  validateSkillsTab = () => {
    return cy.get(SKILLS_TAB).shouldBeVisible().should('contain', 'Skills');
  };

  validateMenteesTab = () => {
    return cy.get(MENTEES_TAB).shouldBeVisible().should('contain', 'Mentees');
  };

  validateShowMoreButton = () => {
    return cy
      .get(SHOW_MORE_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Show more');
  };

  getMentorsCards = () => {
    return cy.get(MENTORS_CARDS).should('exist');
  };

  validateMentorByName = (option, mentorName) => {
    cy.wrap(option).find(MENTORS_TITLE).should('contain', mentorName);
  };

  validateMentorByPosition = (option, mentorPosition) => {
    cy.wrap(option).find(MENTORS_POSITION).should('contain', mentorPosition);
  };

  validateMentorByLocation = (option, mentorLocation) => {
    cy.wrap(option)
      .find(PRESENTATION_CARD)
      .contains(':nth-child(2)', ': ' + mentorLocation)
      .should('exist');
  };

  validateMentorByBio = (option, mentorBio) => {
    cy.contains('Show more').click({ force: true });
    const extracts = mentorBio.split('<br>');
    const cleanedExtracts = extracts.map((extract) =>
      extract.replace(/<br>/g, '').trim()
    );

    cleanedExtracts.forEach((sentence) => {
      cy.wrap(option).find(PRESENTATION_CARD).contains(sentence.trim());
    });
  };

  getSkillsTab = () => {
    return cy.get(SKILLS_TAB).shouldBeVisible();
  };

  getSkillsTabLocator = () => {
    return SKILLS_TAB;
  };

  validateTechExperience = (option, techExperience) => {
    cy.wrap(option).find(SKILLS_TAB).click();
    cy.wrap(option)
      .find(SKILLS_CARD)
      .find('.card-text')
      .contains(':nth-child(1)', techExperience);
  };

  validateLanguages = (option, languages) => {
    cy.wrap(option)
      .find(SKILLS_CARD)
      .find('.card-text')
      .contains(':nth-child(2)', languages);
  };

  validateProgrammingLanguages = (option, programmingLanguages) => {
    cy.wrap(option)
      .find(SKILLS_CARD)
      .find('.card-text')
      .contains(':nth-child(3)', programmingLanguages);
  };

  validateSocialLinks = (option, testDataLinks) => {
    cy.wrap(option)
      .find(NETWORK_LINKS)
      .children()
      .each(($child, index) => {
      const value = Object.values(testDataLinks[index]).toString();
      cy.wrap($child).should('have.attr', 'href', value);
      });
  };

  validateMentoringTypes = (option, mentoringTypes) => {
    cy.wrap(option).find(MENTEES_TAB).click();
    let mentoringTypeDisplayed =
      mentoringTypes === 'both'
        ? 'Long term relationship and Ad-Hoc'
        : mentoringTypes;

    cy.wrap(option)
      .find(MENTEES_CARD)
      .contains(':nth-child(1)', ': ' + mentoringTypeDisplayed);
  };

  validateAvailableHours = (option, hours) => {
    cy.wrap(option)
      .find(MENTEES_CARD)
      .eq(1)
      .contains(':nth-child(2)', ': ' + hours)
      .should('exist');
  };

  validateIdealMentee = (option, menteeInfo) => {
    cy.wrap(option)
      .find(MENTEES_CARD)
      .eq(2)
      .contains(menteeInfo)
      .should('exist');
  };

  validateAreasAndFocus = (option, areas, focus) => {
    cy.wrap(option)
      .find('.card-mentees')
      .children()
      .eq(4)
      .children()
      .each(($child, index) => {
        cy.get($child)
          .invoke('text')
          .then((text) => {
            const focusIndex = index - areas.length;
            if (index < areas.length && areas[index] != null) {
              expect(text.trim()).to.equal(areas[index].trim());
            } else if (focus[focusIndex] != null) {
              const correctIndex = index - areas.length;
              expect(text.trim()).to.equal(focus[correctIndex].trim());
            }
          });
      });
  };

  validateExtraMentoringTopics = (option, extraTopics) => {
    cy.wrap(option).find(MENTEES_CARD).contains(extraTopics.trim());
  };
}

export default new mentorsLocatorManager();
