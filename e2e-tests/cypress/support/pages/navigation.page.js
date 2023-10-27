import headerLocatorManager from '../locators/header.locate';
import footerLocatorManager from '../locators/footer.locate';

export function switchToPage(pageName) {
  switch (pageName) {
    case 'Home':
      headerLocatorManager.getHomeTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Mentors':
      headerLocatorManager.getMentorsTab().click();
      cy.url().should('include', '/london/mentors');
      break;
    case 'Resources':
      headerLocatorManager.getResourcesTab().click();
      cy.url().should('include', '/london/resources');
      break;
    case 'How it works':
      headerLocatorManager.getHowItWorksTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Team':
      headerLocatorManager.getTeamTab().click();
      cy.url().should('include', '/london/team');
      break;
    default:
      break;
  }
}

export function verifyFooter() {
  footerLocatorManager.getFooter();
  footerLocatorManager.getFooterBrandLogo();
  footerLocatorManager.getFooterWWCInfo();
  footerLocatorManager.getWWCCopyright();
  footerLocatorManager.getFooterMentorshipHeader();
  footerLocatorManager.getFooterMentorshipSubheader();
  footerLocatorManager.getFollowUsLabel();
  footerLocatorManager.getStayTunedLabel();
  footerLocatorManager.getLinkedinUrl();
  footerLocatorManager.getInstagramUrl();
  footerLocatorManager.getTwitterUrl();
  footerLocatorManager.getGithubUrl();
  footerLocatorManager.getMeetupUrl();
  footerLocatorManager.getFacebookUrl();
  footerLocatorManager.getSlackUrl();
  footerLocatorManager.getYoutubeUrl();
}

export function verifyHeaderTabs() {
  headerLocatorManager.getHomeTab();
  headerLocatorManager.getMentorsTab();
  headerLocatorManager.getResourcesTab();
  headerLocatorManager.getHowItWorksTab();
  headerLocatorManager.getTeamTab();
}

export function verifyHeader() {
  headerLocatorManager.getHomeBanner();
  headerLocatorManager.getHomeHeader();
  headerLocatorManager.getHomeSubheader();
}
