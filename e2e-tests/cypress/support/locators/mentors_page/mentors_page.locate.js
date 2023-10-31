const ALERT = ':nth-child(3) > .alert'
const KEYWORD_INPUT = '#keywords';
const EXPERIENCE_DROPDOWN = '#experience';
const AREA_DROPDOWN = '#area';
const MENTEE_FOCUS = '#focus';
const LONG_TERM_RADIOBUTTON = '.form-inline > :nth-child(5)';
const AD_HOC_RADIOBUTTON = '.form-inline  > :nth-child(6)';

//Mentors cards (1st one in the list)
const PRESENTATION_TAB = '#bt-p-51';
const SKILLS_TAB = '#bt-s-51';
const MENTEES_TAB = '#bt-m-51';
const SHOW_MORE_BUTTON = '#btn-show-more-51';

class mentorsLocatorManager {
  validateMentorsAlert = () => {
    return cy
      .get(ALERT)
      .shouldBeVisible()
      .should('contain', ' Dear mentors and mentees, we would like to inform you that we will be concluding Mentorship Programme 4.0 in November, and there will be no further ad-hoc sessions from November onwards this year. We deeply appreciate your active participation and  we look forward to seeing you again next year!');
  };

  validateMentorsPageHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible().should('contain', 'Meet our community of mentors!');
  };

  //Search section
  validateKeywordInput = () => {
    return cy
      .get(KEYWORD_INPUT)
      .shouldBeVisible()
      .should('have.attr', 'placeholder', 'Keywords');
  };

  verifyExperienceDropdownValues = () => {
    cy.fixture('test_data/mentor_experience.json').then((file) => {
      const options = file.experienceOptions;
      cy.get(EXPERIENCE_DROPDOWN)
      .children('option')
      .should('have.length', options.length)
      .each(($option, index) => {
         cy.wrap($option).should('contain', options[index].label);
      });
});
};

  verifyAreaDropdownValues = () => {
    cy.fixture('test_data/mentor_areas.json').then((mentors) => {
      const options = mentors.areaOptions;
      cy.get(AREA_DROPDOWN)
      .children('option')
      .should('have.length', options.length)
      .each(($option, index) => {
         cy.wrap($option).should('contain', options[index].label);
      });
});
};

  verifyMenteeFocusDropdownValues = () => {
    const referenceValues = [
      'Mentee Focus',
      'Switch career to IT',
      'Grow from beginner to mid-level',
      'Grow from mid-level to senior-level',
      'Grow beyond senior level',
      'Switch from IC to management position',
      'Change specialisation within IT',
    ];

    cy.get(MENTEE_FOCUS)
      .children('option')
      .should('have.length', referenceValues.length)
      .each(($option, index) => {
        cy.wrap($option).should('contain', referenceValues[index]);
      });
  };

  validateLongTermRadiobutton = () => {
    return cy
      .get(LONG_TERM_RADIOBUTTON)
      .find('label')
      .should('contain', 'Long Term relationship');
  };

  validateAdHocRadiobutton = () => {
    return cy.get(AD_HOC_RADIOBUTTON).find('label').should('contain', 'Ad-Hoc');
  };

  //Mentors cards
  getMentorsCards = () => {
    return cy.get(`[id*="mentor-card"]`).should('exist');
  };

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
}

export default new mentorsLocatorManager();
