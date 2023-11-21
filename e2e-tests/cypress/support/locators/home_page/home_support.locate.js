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
  validateSupportTitle = () => {
    return cy
      .get(SUPPORT_TITLE)
      .shouldBeVisible()
      .should('contain', 'We are going to support you along the way!');
  };

  verifySupportIcons = () => {
    cy.get(SUPPORT_ICON_1).should('exist');

    cy.get(SUPPORT_ICON_2).should('exist');

    cy.get(SUPPORT_ICON_3).should('exist');
  };

  verifySupportCardTitles = () => {
    cy.get(SUPPORT_CARD_TITLE_1)
      .should('exist')
      .and('contain', 'Progress Tracking');

    cy.get(SUPPORT_CARD_TITLE_2).should('exist').and('contain', 'Catch-ups');

    cy.get(SUPPORT_CARD_TITLE_3)
      .should('exist')
      .and('contain', 'General Support');
  };

  verifySupportCardDetails = () => {
    cy.get(SUPPORT_CARD_DETAILS_1)
      .should('exist')
      .and(
        'contain',
        'We provide a template in Notion for tracking your progress during the Mentorship Programme cycle'
      );

    cy.get(SUPPORT_CARD_DETAILS_2)
      .should('exist')
      .and(
        'contain',
        'To get to know each other and share experience we conduct catch-up sessions for mentors and mentees'
      );

    cy.get(SUPPORT_CARD_DETAILS_3)
      .should('exist')
      .and(
        'contain',
        'We provide general support to address any queries during the Mentorship Programme cycle'
      );
  };
}

export default new homeSupportLocatorManager();
