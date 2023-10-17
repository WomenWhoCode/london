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
      homePageLocatorManager.getTimelineTitle();
      homePageLocatorManager.verifyTimelineIcons();
      homePageLocatorManager.verifyTimelineCards();
      homePageLocatorManager.verifyTimelineCardsDates();
      homePageLocatorManager.getCheckDetailsButton();
      homePageLocatorManager.getSupportTitle();
      homePageLocatorManager.verifySupportIcons();
      homePageLocatorManager.verifySupportCardTitles();
      homePageLocatorManager.verifySupportCardDetails();
      homePageLocatorManager.getFeedbackTitle();
      homePageLocatorManager.getFeedbackBlock();
      homePageLocatorManager.getFooter();
      homePageLocatorManager.getFooterBrandLogo();
      homePageLocatorManager.getFooterWWCInfo();
      homePageLocatorManager.getWWCCopyright();
      homePageLocatorManager.getFooterMentorshipHeader();
      homePageLocatorManager.getFooterMentorshipSubheader();
      homePageLocatorManager.getFollowUsLabel();
      homePageLocatorManager.getStayTunedLabel();
      homePageLocatorManager.getLinkedinUrl();
      homePageLocatorManager.getInstagramUrl();
      homePageLocatorManager.getTwitterUrl();
      homePageLocatorManager.getGithubUrl();
      homePageLocatorManager.getMeetupUrl();
      homePageLocatorManager.getFacebookUrl();
      homePageLocatorManager.getSlackUrl();
      homePageLocatorManager.getYoutubeUrl();
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
