const TIMELINE_TITLE = '.timeline > h2';
const TIMELINE_ICON_1 = ':nth-child(1) > .card > .card-header > .circle';
const TIMELINE_ICON_2 = ':nth-child(2) > .card > .card-header > .circle';
const TIMELINE_ICON_3 = ':nth-child(3) > .card > .card-header > .circle';
const TIMELINE_ICON_4 = ':nth-child(4) > .card > .card-header > .circle';
const TIMELINE_CARD_1 =
  '.timeline > .row > :nth-child(1) > .card > .card-body > .card-title';
const TIMELINE_CARD_2 =
  '.timeline > .row > :nth-child(2) > .card > .card-body > .card-title';
const TIMELINE_CARD_3 =
  '.timeline > .row > :nth-child(3) > .card > .card-body > .card-title';
const TIMELINE_CARD_4 =
  '.timeline > .row > :nth-child(4) > .card > .card-body > .card-title';
const TIMELINE_CARD_DATE_1 =
  '.timeline > .row > :nth-child(1) > .card > .card-body > p';
const TIMELINE_CARD_DATE_2 =
  '.timeline > .row > :nth-child(2) > .card > .card-body > p';
const TIMELINE_CARD_DATE_3 =
  '.timeline > .row > :nth-child(3) > .card > .card-body > p';
const TIMELINE_CARD_DATE_4 =
  '.timeline > .row > :nth-child(4) > .card > .card-body > p';

const CHECK_DETAILS_BUTTON = '.text-center > .btn';

class homeTimelineLocatorManager {
  validateTimelineTitle = () => {
    return cy
      .get(TIMELINE_TITLE)
      .shouldBeVisible()
      .should('contain', 'Timeline');
  };

  verifyTimelineIcons = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_ICON_1)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_ICON_2)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_ICON_3)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_ICON_4)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifyTimelineCards = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_CARD_1)
      .should('exist')
      .and('contain', "Mentors' Registrations")
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_CARD_2)
      .should('exist')
      .and('contain', "Mentees' Registrations")
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_3)
      .should('exist')
      .and('contain', 'Mentoring Starts')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_4)
      .should('exist')
      .and('contain', 'The End of the Cycle')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifyTimelineCardsDates = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_CARD_DATE_1)
      .should('exist')
      .and('contain', 'January 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_CARD_DATE_2)
      .should('exist')
      .and('contain', 'February 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_DATE_3)
      .should('exist')
      .and('contain', 'April 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_DATE_4)
      .should('exist')
      .and('contain', 'November 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  validateCheckDetailsButton = () => {
    return cy
      .get(CHECK_DETAILS_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Check more details');
  };

  getCheckDetailsButton = () => {
    return cy.get(CHECK_DETAILS_BUTTON).shouldBeVisible();
  };
}

export default new homeTimelineLocatorManager();
