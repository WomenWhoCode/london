import homeGeneralLocatorManager from '../locators/home_page/home_general.locate';
import homeTimelineLocatorManager from '../locators/home_page/home_timeline.locate';
import homeSupportLocatorManager from '../locators/home_page/home_support.locate';
import homeFeedbackLocatorManager from '../locators/home_page/home_feedback.locate';
import homeHeaderLocatorManager from '../locators/home_page/home_header.locate';

export function openHomePage() {
  cy.visit(Cypress.config('baseUrl'));
}

export const verifyActivePageUrl = (tabName) => {
  switch (tabName) {
    case 'Home':
      cy.url().should('include', '/london');
      break;
    case 'Mentors':
      cy.url().should('include', '/london/mentors');
      break;
    case 'Resources':
      cy.url().should('include', '/london/resources');
      break;
    case 'How it works':
      cy.url().should('include', '/london');
      break;
    case 'Team':
      cy.url().should('include', '/london/team');
      break;
    default:
      break;
  }
};

export function verifyHomeUIElements() {
  homeGeneralLocatorManager.validateOverview();
  homeGeneralLocatorManager.validateMentorTitle();
  homeGeneralLocatorManager.verifyMentorConditions();
  homeGeneralLocatorManager.validateMentorTitle();
  homeGeneralLocatorManager.verifyMenteeConditions();
  homeGeneralLocatorManager.validateJoinAsMentorButton();
  homeGeneralLocatorManager.validateCheckMentorsButton();
  homeTimelineLocatorManager.validateTimelineTitle();
  homeTimelineLocatorManager.verifyTimelineIcons();
  homeTimelineLocatorManager.verifyTimelineCards();
  homeTimelineLocatorManager.verifyTimelineCardsDates();
  homeTimelineLocatorManager.validateCheckDetailsButton();
  homeSupportLocatorManager.validateSupportTitle();
  homeSupportLocatorManager.verifySupportIcons();
  homeSupportLocatorManager.verifySupportCardTitles();
  homeSupportLocatorManager.verifySupportCardDetails();
  homeFeedbackLocatorManager.validateFeedbackTitle();
  homeFeedbackLocatorManager.getFeedbackBlock();
}

export function verifyHomeHeader() {
  homeHeaderLocatorManager.getHomeBanner();
  homeHeaderLocatorManager.validateHomeHeader();
  homeHeaderLocatorManager.validateHomeSubheader();
}

export function clickCheckMoreDetails() {
  homeTimelineLocatorManager.getCheckDetailsButton().click();
  cy.url().should('include', '/london/timeline');
}
