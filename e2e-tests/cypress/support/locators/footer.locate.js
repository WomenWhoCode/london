const FOOTER = '.footer';
const FOOTER_WWC_LOGO = '.col-sm-7 > .brand';
const FOOTER_WWC_INFO = ':nth-child(1) > small';
const FOOTER_WWC_COPYRIGHT = '.col-sm-7 > :nth-child(2) > small';
const FOOTER_MENTORSHIP_HEADER = ':nth-child(1) > .col-sm-4 > h5';
const FOOTER_MENTORSHIP_SUBHEADER = ':nth-child(1) > .col-sm-4 > p > small';
const FOLLOW_US_LABEL = ':nth-child(2) > .col-sm-4 > h5';
const STAY_TUNED_LABEL = ':nth-child(2) > .col-sm-4 > :nth-child(2) > small';
const SOCIAL_LINKS = '.network';

class footerLocatorManager {
  getFooter = () => {
    return cy.get(FOOTER).shouldBeVisible();
  };

  getFooterBrandLogo = () => {
    return cy.get(FOOTER_WWC_LOGO).shouldBeVisible();
  };

  getSocialLinks = () => {
    return cy.get(SOCIAL_LINKS).children();
  };

  getSocialNetworkContainer = () => {
    return cy.get(SOCIAL_LINKS);
  };

  validateFooterWWCInfo = () => {
    return cy.get(FOOTER_WWC_INFO).shouldBeVisible().should('contain', 'Women Who Code is a 501(c)(3) not-for-profit organization.');
  };

  validateWWCCopyright = () => {
    return cy.get(FOOTER_WWC_COPYRIGHT).shouldBeVisible().should('contain', '© 2023 Women Who Code London');
  };

  validateFooterMentorshipHeader = () => {
    return cy.get(FOOTER_MENTORSHIP_HEADER).shouldBeVisible().should('contain', 'Mentorship Programme');
  };

  validateFooterMentorshipSubheader = () => {
    return cy.get(FOOTER_MENTORSHIP_SUBHEADER).shouldBeVisible().should('contain', 'Women Who Code London');
  };

  validateFollowUsLabel = () => {
    return cy.get(FOLLOW_US_LABEL).shouldBeVisible().should('contain', 'Follow Us');
  };

  vaidateStayTunedLabel = () => {
    return cy.get(STAY_TUNED_LABEL).shouldBeVisible().should('contain', 'Join us on social media and stay tuned.');
  };
}

export default new footerLocatorManager();
