const SUPPORT_TITLE = '.support > h2';
const SUPPORT_ICON_1 = '.support > .row > :nth-child(1) > .card > .card-header';
const SUPPORT_ICON_2 = '.support > .row > :nth-child(2) > .card > .card-header';
const SUPPORT_ICON_3 = '.support > .row > :nth-child(3) > .card > .card-header';
const SUPPORT_CARD_TITLE_1 =
  '.support > .row > :nth-child(1) > .card > .card-body > .card-title';
const SUPPORT_CARD_TITLE_2 =
  '.support > .row > :nth-child(2) > .card > .card-body > .card-title';
const SUPPORT_CARD_TITLE_3 =
  '.support > .row > :nth-child(3) > .card > .card-body > .card-title';
const SUPPORT_CARD_DETAILS_1 =
  '.support > .row > :nth-child(1) > .card > .card-body > p';
const SUPPORT_CARD_DETAILS_2 =
  '.support > .row > :nth-child(2) > .card > .card-body > p';
const SUPPORT_CARD_DETAILS_3 =
  '.support > .row > :nth-child(3) > .card > .card-body > p';

class homeSupportLocatorManager {
  getSupportTitle = () => {
    return cy
      .get(SUPPORT_TITLE)
      .shouldBeVisible()
      .contains('We are going to support you along the way!');
  };

  verifySupportIcons = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_ICON_1)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_ICON_2)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_ICON_3)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifySupportCardTitles = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_CARD_TITLE_1)
      .should('exist')
      .and('contain', 'Progress Tracking')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_CARD_TITLE_2)
      .should('exist')
      .and('contain', 'Catch-ups')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_CARD_TITLE_3)
      .should('exist')
      .and('contain', 'General Support')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifySupportCardDetails = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_CARD_DETAILS_1)
      .should('exist')
      .and(
        'contain',
        'We provide a template in Notion for tracking your progress during the Mentorship Programme cycle'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_CARD_DETAILS_2)
      .should('exist')
      .and(
        'contain',
        'To get to know each other and share experience we conduct catch-up sessions for mentors and mentees'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_CARD_DETAILS_3)
      .should('exist')
      .and(
        'contain',
        'We provide general support to address any queries during the Mentorship Programme cycle'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };
}

export default new homeSupportLocatorManager();
