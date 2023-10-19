const FOOTER = '.footer';
const FOOTER_WWC_LOGO = '.col-sm-7 > .brand';
const FOOTER_WWC_INFO = ':nth-child(1) > small';
const FOOTER_WWC_COPYRIGHT = '.col-sm-7 > :nth-child(2) > small';
const FOOTER_MENTORSHIP_HEADER = ':nth-child(1) > .col-sm-4 > h5';
const FOOTER_MENTORSHIP_SUBHEADER = ':nth-child(1) > .col-sm-4 > p > small';
const FOLLOW_US_LABEL = ':nth-child(2) > .col-sm-4 > h5';
const STAY_TUNED_LABEL = ':nth-child(2) > .col-sm-4 > :nth-child(2) > small';
const SOCIAL_LINK_LINKEDIN = '.network > :nth-child(1)';
const SOCIAL_LINK_INSTAGRAM = '.network > :nth-child(2)';
const SOCIAL_LINK_TWITTER = '.network > :nth-child(3)';
const SOCIAL_LINK_GITHUB = '.network > :nth-child(4)';
const SOCIAL_LINK_MEETUP = '.network > :nth-child(5)';
const SOCIAL_LINK_FACEBOOK = '.network > :nth-child(6)';
const SOCIAL_LINK_SLACK = '.network > :nth-child(7)';
const SOCIAL_LINK_YOUTUBE = '.network > :nth-child(8)';

class homeFooterLocatorManager {
  getFooter = () => {
    return cy.get(FOOTER).shouldBeVisible();
  };

  getFooterBrandLogo = () => {
    return cy.get(FOOTER_WWC_LOGO).shouldBeVisible();
  };

  getFooterWWCInfo = () => {
    return cy
      .get(FOOTER_WWC_INFO)
      .shouldBeVisible()
      .contains('Women Who Code is a 501(c)(3) not-for-profit organization.');
  };

  getWWCCopyright = () => {
    return cy
      .get(FOOTER_WWC_COPYRIGHT)
      .shouldBeVisible()
      .contains('© 2023 Women Who Code London');
  };

  getFooterMentorshipHeader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_HEADER)
      .shouldBeVisible()
      .contains('Mentorship Programme');
  };

  getFooterMentorshipSubheader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_SUBHEADER)
      .shouldBeVisible()
      .contains('Women Who Code London');
  };

  getFollowUsLabel = () => {
    return cy.get(FOLLOW_US_LABEL).shouldBeVisible().contains('Follow Us');
  };

  getStayTunedLabel = () => {
    return cy
      .get(STAY_TUNED_LABEL)
      .shouldBeVisible()
      .contains('Join us on social media and stay tuned.');
  };

  getLinkedinUrl = () => {
    return cy
      .get(SOCIAL_LINK_LINKEDIN)
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://www.linkedin.com/company/wwcodelondon/'
      );
  };

  getInstagramUrl = () => {
    return cy
      .get(SOCIAL_LINK_INSTAGRAM)
      .find('a')
      .should('have.attr', 'href', 'https://www.instagram.com/wwcodelondon');
  };

  getTwitterUrl = () => {
    return cy
      .get(SOCIAL_LINK_TWITTER)
      .find('a')
      .should('have.attr', 'href', 'https://twitter.com/WWCodeLondon');
  };

  getGithubUrl = () => {
    return cy
      .get(SOCIAL_LINK_GITHUB)
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://github.com/WomenWhoCode/WWCode-London'
      );
  };

  getMeetupUrl = () => {
    return cy
      .get(SOCIAL_LINK_MEETUP)
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://www.meetup.com/women-who-code-london/'
      );
  };

  getFacebookUrl = () => {
    return cy
      .get(SOCIAL_LINK_FACEBOOK)
      .find('a')
      .should('have.attr', 'href', 'https://www.facebook.com/wwcodelondon/');
  };

  getSlackUrl = () => {
    return cy
      .get(SOCIAL_LINK_SLACK)
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://join.slack.com/t/wwcodelondon/shared_invite/zt-1kltyfn5s-vCzO9oALyOJP5m11P4fOLg'
      );
  };

  getYoutubeUrl = () => {
    return cy
      .get(SOCIAL_LINK_YOUTUBE)
      .find('a')
      .should('have.attr', 'href', 'https://youtube.com/user/WomenWhoCode');
  };
}

export default new homeFooterLocatorManager();
