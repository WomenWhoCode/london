const FOOTER = '.footer';
const FOOTER_WWC_LOGO = '.col-sm-7 > .brand';
const FOOTER_WWC_INFO = ':nth-child(1) > small';
const FOOTER_WWC_COPYRIGHT = '.col-sm-7 > :nth-child(2) > small';
const FOOTER_MENTORSHIP_HEADER = ':nth-child(1) > .col-sm-4 > h5';
const FOOTER_MENTORSHIP_SUBHEADER = ':nth-child(1) > .col-sm-4 > p > small';
const FOLLOW_US_LABEL = ':nth-child(2) > .col-sm-4 > h5';
const STAY_TUNED_LABEL = ':nth-child(2) > .col-sm-4 > :nth-child(2) > small';
const SOCIAL_LINK_LINKEDIN = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(1) > a'
const SOCIAL_LINK_INSTAGRAM = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(2) > a'
const SOCIAL_LINK_TWITTER = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(3) > a'
const SOCIAL_LINK_GITHUB = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(4) > a'
const SOCIAL_LINK_MEETUP = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(5) > a'
const SOCIAL_LINK_FACEBOOK = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(6) > a'
const SOCIAL_LINK_SLACK = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(7) > a'
const SOCIAL_LINK_YOUTUBE = '.footer > .container > :nth-child(2) > :nth-child(2) > :nth-child(3) > :nth-child(8) > a'

class footerLocatorManager {
  getFooter = () => {
    return cy.get(FOOTER).shouldBeVisible();
  };

  getFooterBrandLogo = () => {
    return cy.get(FOOTER_WWC_LOGO).shouldBeVisible();
  };

  validateFooterWWCInfo = () => {
    return cy
      .get(FOOTER_WWC_INFO)
      .shouldBeVisible()
      .should('contain', 'Women Who Code is a 501(c)(3) not-for-profit organization.');
  };

  validateWWCCopyright = () => {
    return cy
      .get(FOOTER_WWC_COPYRIGHT)
      .shouldBeVisible()
      .should('contain', '© 2023 Women Who Code London');
  };

  validateFooterMentorshipHeader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_HEADER)
      .shouldBeVisible()
      .should('contain', 'Mentorship Programme');
  };

  validateFooterMentorshipSubheader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_SUBHEADER)
      .shouldBeVisible()
      .should('contain', 'Women Who Code London');
  };

  validateFollowUsLabel = () => {
    return cy.get(FOLLOW_US_LABEL).shouldBeVisible().should('contain', 'Follow Us');
  };

  vaidateStayTunedLabel = () => {
    return cy
      .get(STAY_TUNED_LABEL)
      .shouldBeVisible()
      .should('contain','Join us on social media and stay tuned.');
  };

  validateLinkedinUrl = () => {
    return cy.get(SOCIAL_LINK_LINKEDIN).should('have.attr', 'href', 'https://www.linkedin.com/company/wwcodelondon/')
  };

  validateInstagramUrl = () => {
    return cy
      .get(SOCIAL_LINK_INSTAGRAM)
      .should('have.attr', 'href', 'https://www.instagram.com/wwcodelondon');
  };

  validateTwitterUrl = () => {
    return cy
      .get(SOCIAL_LINK_TWITTER)
      .should('have.attr', 'href', 'https://twitter.com/WWCodeLondon');
  };

  validateGithubUrl = () => {
    return cy
      .get(SOCIAL_LINK_GITHUB)
      .should(
        'have.attr',
        'href',
        'https://github.com/WomenWhoCode/WWCode-London'
      );
  };

  validateMeetupUrl = () => {
    return cy
      .get(SOCIAL_LINK_MEETUP)
      .should(
        'have.attr',
        'href',
        'https://www.meetup.com/women-who-code-london/'
      );
  };

  validateFacebookUrl = () => {
    return cy
      .get(SOCIAL_LINK_FACEBOOK)
      .should('have.attr', 'href', 'https://www.facebook.com/wwcodelondon/');
  };

  validateSlackUrl = () => {
    return cy
      .get(SOCIAL_LINK_SLACK)
      .should(
        'have.attr',
        'href',
        'https://join.slack.com/t/wwcodelondon/shared_invite/zt-1kltyfn5s-vCzO9oALyOJP5m11P4fOLg'
      );
  };

  validateYoutubeUrl = () => {
    return cy
      .get(SOCIAL_LINK_YOUTUBE)
      .should('have.attr', 'href', 'https://youtube.com/user/WomenWhoCode');
  };
}

export default new footerLocatorManager();
