import headerLocatorManager from '../locators/header.locate';
import footerLocatorManager from '../locators/footer.locate';

export function switchToPage(pageName) {
  switch (pageName) {
    case 'HOME':
      headerLocatorManager.getHomeTab().click();
      cy.url().should('include', '/london');
      break;
    case 'MENTORS':
      headerLocatorManager.getMentorsTab().click();
      cy.url().should('include', '/london/mentors');
      break;
    case 'RESOURCES':
      headerLocatorManager.getResourcesTab().click();
      cy.url().should('include', '/london/resources');
      break;
    case 'HOW IT WORKS':
      headerLocatorManager.getHowItWorksTab().click();
      cy.url().should('include', '/london');
      break;
    case 'TEAM':
      headerLocatorManager.getTeamTab().click();
      cy.url().should('include', '/london/team');
      break;
    case 'LONG-TERM TIMELINE':
      headerLocatorManager.getHowItWorksTab().click();
      cy.contains(pageName).click();
      cy.url().should('include', '/london/timeline');
      break;
    default:
      break;
  }
}

export function verifyFooter() {
  footerLocatorManager.getFooter();
  footerLocatorManager.getFooterBrandLogo();
  footerLocatorManager.validateFooterWWCInfo();
  footerLocatorManager.validateWWCCopyright();
  footerLocatorManager.validateFooterMentorshipHeader();
  footerLocatorManager.validateFooterMentorshipSubheader();
  footerLocatorManager.validateFollowUsLabel();
  footerLocatorManager.vaidateStayTunedLabel();
  footerLocatorManager.validateLinkedinUrl();
  footerLocatorManager.validateInstagramUrl();
  footerLocatorManager.validateTwitterUrl();
  footerLocatorManager.validateGithubUrl();
  footerLocatorManager.validateMeetupUrl();
  footerLocatorManager.validateFacebookUrl();
  footerLocatorManager.validateSlackUrl();
  footerLocatorManager.validateYoutubeUrl();
}

export function verifyHeaderTabs() {
  headerLocatorManager.getHomeTab();
  headerLocatorManager.getMentorsTab();
  headerLocatorManager.getResourcesTab();
  headerLocatorManager.getHowItWorksTab();
  headerLocatorManager.getTeamTab();
}

export function verifyHeaderLogo() {
  headerLocatorManager.getHeaderLogo();
}