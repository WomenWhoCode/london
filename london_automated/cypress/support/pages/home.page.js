//import cypressConfig from '../../../cypress.config';
import homePageLocatorManager from '../locators/home_page.locate';

export function openHomePage() {
  cy.visit(Cypress.config('baseUrl'));
}

export function verifyHomeTabs() {
  homePageLocatorManager.getHomeTab();
  homePageLocatorManager.getMentorsTab();
  homePageLocatorManager.getResourcesTab();
  homePageLocatorManager.getHowItWorksTab();
  homePageLocatorManager.getTeamTab();
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

export function verifyUIElements(tabName) {
  switch (tabName) {
    case 'Home':
      homePageLocatorManager.getHomeBanner();
      homePageLocatorManager.getHomeHeader();
      homePageLocatorManager.getHomeSubheader();
      homePageLocatorManager.getOverview();
      homePageLocatorManager.getMentorTitle();
      homePageLocatorManager.verifyMentorConditions();
      homePageLocatorManager.getMenteeTitle();
      homePageLocatorManager.verifyMenteeConditions();
      homePageLocatorManager.getJoinAsMentorButton();
      homePageLocatorManager.getCheckMentorsButton();
      break;
    case 'Mentors':
      break;
    case 'Resources':
      break;
    case 'How it works':
      break;
    case 'Team':
      break;
    default:
      break;
  }
}
