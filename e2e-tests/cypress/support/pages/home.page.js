import homeHeaderLocatorManager from '../locators/home_page/home_header.locate';
import homeGeneralLocatorManager from '../locators/home_page/home_general.locate';
import homeTimelineLocatorManager from '../locators/home_page/home_timeline.locate';
import homeSupportLocatorManager from '../locators/home_page/home_support.locate';
import homeFeedbackLocatorManager from '../locators/home_page/home_feedback.locate';
import homeFooterLocatorManager from '../locators/home_page/home_footer.locate';

export function openHomePage() {
  cy.visit(Cypress.config('baseUrl'));
}

export function verifyHomeTabs() {
  homeHeaderLocatorManager.getHomeTab();
  homeHeaderLocatorManager.getMentorsTab();
  homeHeaderLocatorManager.getResourcesTab();
  homeHeaderLocatorManager.getHowItWorksTab();
  homeHeaderLocatorManager.getTeamTab();
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
      homeHeaderLocatorManager.getHomeBanner();
      homeHeaderLocatorManager.getHomeHeader();
      homeHeaderLocatorManager.getHomeSubheader();
      homeGeneralLocatorManager.getOverview();
      homeGeneralLocatorManager.getMentorTitle();
      homeGeneralLocatorManager.verifyMentorConditions();
      homeGeneralLocatorManager.getMenteeTitle();
      homeGeneralLocatorManager.verifyMenteeConditions();
      homeGeneralLocatorManager.getJoinAsMentorButton();
      homeGeneralLocatorManager.getCheckMentorsButton();
      homeTimelineLocatorManager.getTimelineTitle();
      homeTimelineLocatorManager.verifyTimelineIcons();
      homeTimelineLocatorManager.verifyTimelineCards();
      homeTimelineLocatorManager.verifyTimelineCardsDates();
      homeTimelineLocatorManager.getCheckDetailsButton();
      homeSupportLocatorManager.getSupportTitle();
      homeSupportLocatorManager.verifySupportIcons();
      homeSupportLocatorManager.verifySupportCardTitles();
      homeSupportLocatorManager.verifySupportCardDetails();
      homeFeedbackLocatorManager.getFeedbackTitle();
      homeFeedbackLocatorManager.getFeedbackBlock();
      homeFooterLocatorManager.getFooter();
      homeFooterLocatorManager.getFooterBrandLogo();
      homeFooterLocatorManager.getFooterWWCInfo();
      homeFooterLocatorManager.getWWCCopyright();
      homeFooterLocatorManager.getFooterMentorshipHeader();
      homeFooterLocatorManager.getFooterMentorshipSubheader();
      homeFooterLocatorManager.getFollowUsLabel();
      homeFooterLocatorManager.getStayTunedLabel();
      homeFooterLocatorManager.getLinkedinUrl();
      homeFooterLocatorManager.getInstagramUrl();
      homeFooterLocatorManager.getTwitterUrl();
      homeFooterLocatorManager.getGithubUrl();
      homeFooterLocatorManager.getMeetupUrl();
      homeFooterLocatorManager.getFacebookUrl();
      homeFooterLocatorManager.getSlackUrl();
      homeFooterLocatorManager.getYoutubeUrl();
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
