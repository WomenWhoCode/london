const KEYWORD_INPUT = '#keywords';
const EXPERIENCE_DROPDOWN = '#experience';
const AREA_DROPDOWN = '#area';
const MENTEE_FOCUS = '#focus';
const LONG_TERM_RADIOBUTTON = '.form-inline > :nth-child(5)';
const AD_HOC_RADIOBUTTON = ':nth-child(6) > .form-check';

//Mentors cards (1st one in the list)
const PRESENTATION_TAB = '#bt-p-51';
const SKILLS_TAB = '#bt-s-51';
const MENTEES_TAB = '#bt-m-51';
const SHOW_MORE_BUTTON = '#btn-show-more-51';

class mentorsLocatorManager {
  getMentorsPageHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible()
      .should('contain', 'Meet our community of mentors!');
  };

  //Search section
  getKeywordInput = () => {
    return cy
      .get(KEYWORD_INPUT)
      .shouldBeVisible()
      .should('have.attr', 'placeholder', 'Keywords');
  };

  verifyExperienceDropdownValues = () => {
    const referenceValues = [
      'Experience in Tech',
      '0+ year',
      '2+ years',
      '3+ years',
      '4+ years',
      '5+ years',
      '7+ years',
      '10+ years',
      '16+ years',
    ];

    cy.get(EXPERIENCE_DROPDOWN)
      .children('option')
      .should('have.length', referenceValues.length)
      .each(($option, index) => {
        cy.wrap($option).should('contain', referenceValues[index]);
      });
  };

  verifyAreaDropdownValues = () => {
    const referenceValues = [
      'Area in tech',
      'QA',
      'Backend Developer',
      'Frontend Developer',
      'Fullstack Developer',
      'DevOps',
      'Distributed Systems',
      'Data Science',
      'Data Engineering',
      'Android',
      'iOS',
      'Business Analysis',
      'Product Management',
      'Project Management',
      'Machine Learning',
      'Engineering management',
    ];

    cy.get(AREA_DROPDOWN)
      .children('option')
      .should('have.length', referenceValues.length)
      .each(($option, index) => {
        cy.wrap($option).should('contain', referenceValues[index]);
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

  getLongTermRadiobutton = () => {
    return cy
      .get(LONG_TERM_RADIOBUTTON)
      .find('label')
      .should('contain', 'Long Term relationship');
  };

  getAdHocRadiobutton = () => {
    return cy.get(AD_HOC_RADIOBUTTON).find('label').should('contain', 'Ad-Hoc');
  };

  //Mentors cards
  getMentorsCards = () => {
    return cy.get(`[id*="mentor-card"]`).should('exist');
  };

  getPresentationTab = () => {
    return cy
      .get(PRESENTATION_TAB)
      .shouldBeVisible()
      .should('contain', 'Presentation');
  };

  getSkillsTab = () => {
    return cy.get(SKILLS_TAB).shouldBeVisible().should('contain', 'Skills');
  };

  getMenteesTab = () => {
    return cy.get(MENTEES_TAB).shouldBeVisible().should('contain', 'Mentees');
  };

  getShowMoreButton = () => {
    return cy
      .get(SHOW_MORE_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Show more');
  };
}

export default new mentorsLocatorManager();
