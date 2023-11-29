import homeGeneralLocatorManager from '../locators/home_page/home_general.locate';
import homeTimelineLocatorManager from '../locators/home_page/home_timeline.locate';
import homeSupportLocatorManager from '../locators/home_page/home_support.locate';
import homeFeedbackLocatorManager from '../locators/home_page/home_feedback.locate';
import homeHeaderLocatorManager from '../locators/home_page/home_header.locate';
import footerLocatorManager from '../locators/footer.locate';

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

export function openFooterSocialLink(socialLink) {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('Open');
  });

  cy.fixture('test_data/wwc_social_links.json').then((links) => {
    const expectedLinks = links.socialLinks;
    const keyName = socialLink.toLowerCase();
    const matchingChildren = expectedLinks.filter((child) =>
      Object.keys(child).includes(keyName)
    );

    const targetLink = matchingChildren.length > 0 ? matchingChildren[0][keyName] : null;

    footerLocatorManager.getSocialNetworkContainer().find(`span a[href*="${targetLink}"]`).shouldBeVisible();
    cy.origin(
      targetLink,
      { args: { targetLink, keyName } },
      ({ targetLink, keyName }) => {
        cy.on('uncaught:exception', (err, runnable) => {
          console.error('Ignoring uncaught exception:', err.message);
          return false;
        });
        cy.visit(targetLink, { failOnStatusCode: false });
        cy.wait(1000);

        // if (keyName === 'linkedin') {
        //   cy.url().should('include', 'wwcodelondon');
        // } else {
        //   cy.url().should('include', targetLink);
        // }
        cy.visit(Cypress.config('baseUrl'));
      }
    );
  });
}
