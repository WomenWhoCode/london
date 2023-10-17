const HOME_TAB = '#nav-0';
const MENTORS_TAB = '#nav-1';
const RESOURCES_TAB = '#nav-2';
const HOW_IT_WORKS_TAB = '#drop3';
const TEAM_TAB = '#nav-4';

const BANNER = '.banner';
const MENTOR_TITLE = '.mentor > :nth-child(1)';
const MENTEE_TITLE = '.mentee > :nth-child(1)';
const MENTOR_CONDITION_1 = '.mentor > ul > :nth-child(1)';
const MENTOR_CONDITION_2 = '.mentor > ul > :nth-child(2)';
const MENTOR_CONDITION_3 = '.mentor > ul > :nth-child(3)';
const MENTOR_CONDITION_4 = '.mentor > ul > :nth-child(4)';
const MENTEE_CONDITION_1 = '.mentee > ul > :nth-child(1)';
const MENTEE_CONDITION_2 = '.mentee > ul > :nth-child(2)';
const MENTEE_CONDITION_3 = '.mentee > ul > :nth-child(3)';
const MENTEE_CONDITION_4 = '.mentee > ul > :nth-child(4)';
const MENTEE_CONDITION_5 = '.mentee > ul > :nth-child(5)';

const JOIN_AS_MENTOR_BUTTON = '.mentor > .mt-4 > .btn';
const CHECK_OUT_MENTORS_BUTTON = '.mentee > .mt-4 > .btn';

//Timeline
const TIMELINE_TITLE = '.timeline > h2';
const TIMELINE_ICON_1 = ':nth-child(1) > .card > .card-header > .circle';
const TIMELINE_ICON_2 = ':nth-child(2) > .card > .card-header > .circle';
const TIMELINE_ICON_3 = ':nth-child(3) > .card > .card-header > .circle';
const TIMELINE_ICON_4 = ':nth-child(4) > .card > .card-header > .circle';
const TIMELINE_CARD_1 =
  '.timeline > .row > :nth-child(1) > .card > .card-body > .card-title';
const TIMELINE_CARD_2 =
  '.timeline > .row > :nth-child(2) > .card > .card-body > .card-title';
const TIMELINE_CARD_3 =
  '.timeline > .row > :nth-child(3) > .card > .card-body > .card-title';
const TIMELINE_CARD_4 =
  '.timeline > .row > :nth-child(4) > .card > .card-body > .card-title';
const TIMELINE_CARD_DATE_1 =
  '.timeline > .row > :nth-child(1) > .card > .card-body > p';
const TIMELINE_CARD_DATE_2 =
  '.timeline > .row > :nth-child(2) > .card > .card-body > p';
const TIMELINE_CARD_DATE_3 =
  '.timeline > .row > :nth-child(3) > .card > .card-body > p';
const TIMELINE_CARD_DATE_4 =
  '.timeline > .row > :nth-child(4) > .card > .card-body > p';

const CHECK_DETAILS_BUTTON = '.text-center > .btn';

//Support
const SUPPORT_TITLE = '.support > h2';
const SUPPORT_ICON_1 = '.support > .row > :nth-child(1) > .card > .card-header';
const SUPPORT_ICON_2 = '.support > .row > :nth-child(2) > .card > .card-header';
const SUPPORT_ICON_3 = '.support > .row > :nth-child(3) > .card > .card-header';
const SUPPORT_CARD_TITLE_1 =
  '.support > .row > :nth-child(1) > .card > .card-body > .card-title';
const SUPPORT_CARD_TITLE_2 =
  '.support > .row > :nth-child(2) > .card > .card-body > .card-title';
const SUPPORT_CARD_TITLE_3 =
  '.support > .row > :nth-child(3) > .card > .card-body > .card-title';
const SUPPORT_CARD_DETAILS_1 =
  '.support > .row > :nth-child(1) > .card > .card-body > p';
const SUPPORT_CARD_DETAILS_2 =
  '.support > .row > :nth-child(2) > .card > .card-body > p';
const SUPPORT_CARD_DETAILS_3 =
  '.support > .row > :nth-child(3) > .card > .card-body > p';

//Feedback
const FFEDBACK_TITLE = '.feedback > h2';
const FEEDBACK_BLOCK = '.active > .d-block';

//Footer
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

class homePageLocatorManager {
  getHomeTab = () => {
    return cy.get(HOME_TAB).should('be.visible');
  };

  getMentorsTab = () => {
    return cy.get(MENTORS_TAB).should('be.visible');
  };

  getResourcesTab = () => {
    return cy.get(RESOURCES_TAB).should('be.visible');
  };

  getHowItWorksTab = () => {
    return cy.get(HOW_IT_WORKS_TAB).should('be.visible');
  };

  getTeamTab = () => {
    return cy.get(TEAM_TAB).should('be.visible');
  };

  getHomeBanner = () => {
    return cy.get(BANNER).should('be.visible');
  };

  getHomeHeader = () => {
    return cy.get('h1').should('contain', 'Mentorship Programme 4.0');
  };

  getHomeSubheader = () => {
    return cy.get('h3').should('contain', 'Women Who Code London');
  };

  getOverview = () => {
    return cy
      .get('.overview')
      .invoke('text')
      .then((text) => {
        // Use assertions to check for specific lines or patterns
        expect(text).to.contain(
          'Mentorship is a fantastic way to get support for your personal growth and career development. '
        );
        expect(text).to.contain(
          'Mentorship relationships can be rewarding to both people, personally and professionally. '
        );
        expect(text).to.contain(
          "It's an opportunity to develop communication skills, expand your viewpoints, and consider new ways of approaching situations. "
        );
        expect(text).to.contain(
          'And both partners can advance their careers in the process.'
        );
      });
  };

  getMentorTitle = () => {
    cy.get(MENTOR_TITLE)
      .should('exist')
      .and('contain', 'You should apply to be a ');
    cy.get(MENTOR_TITLE).find('span').should('have.text', 'mentor');
    cy.get(MENTOR_TITLE).should('contain', ' if you:');
  };

  getMenteeTitle = () => {
    return cy.get(MENTEE_TITLE).should('be.visible');
  };

  verifyMentorConditions = () => {
    let areConditionsCorrect = false;

    cy.get(MENTOR_CONDITION_1)
      .should('exist')
      .and('contain', '1. Want to extend your professional network')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(MENTOR_CONDITION_2)
      .should('exist')
      .and('contain', '2. Want to contribute to the community')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(MENTOR_CONDITION_3)
      .should('exist')
      .and('contain', '3. You are ready to share expertise')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(MENTOR_CONDITION_4)
      .should('exist')
      .and(
        'contain',
        '4. You want to get a new perspective and learn from your mentees'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifyMenteeConditions = () => {
    let areConditionsCorrect = false;

    cy.get(MENTEE_CONDITION_1)
      .should('exist')
      .and('contain', '1. Want to start career in software engineering')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(MENTEE_CONDITION_2)
      .should('exist')
      .and('contain', '2. Want to find a better job')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(MENTEE_CONDITION_3)
      .should('exist')
      .and('contain', '3. Want to be promoted at work')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(MENTEE_CONDITION_4)
      .should('exist')
      .and('contain', '4. Want to apply for a leadership position')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(MENTEE_CONDITION_5)
      .should('exist')
      .and('contain', '5. Need support in advancing your career')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  getJoinAsMentorButton = () => {
    return cy
      .get(JOIN_AS_MENTOR_BUTTON)
      .should('be.visible')
      .contains('Join as a Mentor');
  };

  getCheckMentorsButton = () => {
    return cy
      .get(CHECK_OUT_MENTORS_BUTTON)
      .should('be.visible')
      .contains('Check our Mentors');
  };

  //Timeline
  getTimelineTitle = () => {
    return cy.get(TIMELINE_TITLE).should('be.visible').contains('Timeline');
  };

  verifyTimelineIcons = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_ICON_1)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_ICON_2)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_ICON_3)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_ICON_4)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifyTimelineCards = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_CARD_1)
      .should('exist')
      .and('contain', "Mentors' Registrations")
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_CARD_2)
      .should('exist')
      .and('contain', "Mentees' Registrations")
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_3)
      .should('exist')
      .and('contain', 'Mentoring Starts')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_4)
      .should('exist')
      .and('contain', 'The End of the Cycle')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifyTimelineCardsDates = () => {
    let areConditionsCorrect = false;

    cy.get(TIMELINE_CARD_DATE_1)
      .should('exist')
      .and('contain', 'January 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(TIMELINE_CARD_DATE_2)
      .should('exist')
      .and('contain', 'February 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_DATE_3)
      .should('exist')
      .and('contain', 'April 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(TIMELINE_CARD_DATE_4)
      .should('exist')
      .and('contain', 'November 2023')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  getCheckDetailsButton = () => {
    return cy
      .get(CHECK_DETAILS_BUTTON)
      .should('be.visible')
      .contains('Check more details');
  };

  //Support
  getSupportTitle = () => {
    return cy
      .get(SUPPORT_TITLE)
      .should('be.visible')
      .contains('We are going to support you along the way!');
  };

  verifySupportIcons = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_ICON_1)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_ICON_2)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_ICON_3)
      .should('exist')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifySupportCardTitles = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_CARD_TITLE_1)
      .should('exist')
      .and('contain', 'Progress Tracking')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_CARD_TITLE_2)
      .should('exist')
      .and('contain', 'Catch-ups')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_CARD_TITLE_3)
      .should('exist')
      .and('contain', 'General Support')
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  verifySupportCardDetails = () => {
    let areConditionsCorrect = false;

    cy.get(SUPPORT_CARD_DETAILS_1)
      .should('exist')
      .and(
        'contain',
        'We provide a template in Notion for tracking your progress during the Mentorship Programme cycle'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = true;
      });

    cy.get(SUPPORT_CARD_DETAILS_2)
      .should('exist')
      .and(
        'contain',
        'To get to know each other and share experience we conduct catch-up sessions for mentors and mentees'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    cy.get(SUPPORT_CARD_DETAILS_3)
      .should('exist')
      .and(
        'contain',
        'We provide general support to address any queries during the Mentorship Programme cycle'
      )
      .then(($condition, areAssertionsSuccessful) => {
        areAssertionsSuccessful = areAssertionsSuccessful && true;
      });

    return areConditionsCorrect;
  };

  //Feedback
  getFeedbackTitle = () => {
    return cy
      .get(FFEDBACK_TITLE)
      .should('be.visible')
      .contains('What do participants think about our Mentorship Programme?');
  };

  getFeedbackBlock = () => {
    return cy.get(FEEDBACK_BLOCK).should('be.visible');
  };

  //Footer
  getFooter = () => {
    return cy.get(FOOTER).should('be.visible');
  };

  getFooterBrandLogo = () => {
    return cy.get(FOOTER_WWC_LOGO).should('be.visible');
  };

  getFooterWWCInfo = () => {
    return cy
      .get(FOOTER_WWC_INFO)
      .should('be.visible')
      .contains('Women Who Code is a 501(c)(3) not-for-profit organization.');
  };

  getWWCCopyright = () => {
    return cy
      .get(FOOTER_WWC_COPYRIGHT)
      .should('be.visible')
      .contains('© 2023 Women Who Code London');
  };

  getFooterMentorshipHeader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_HEADER)
      .should('be.visible')
      .contains('Mentorship Programme');
  };

  getFooterMentorshipSubheader = () => {
    return cy
      .get(FOOTER_MENTORSHIP_SUBHEADER)
      .should('be.visible')
      .contains('Women Who Code London');
  };

  getFollowUsLabel = () => {
    return cy.get(FOLLOW_US_LABEL).should('be.visible').contains('Follow Us');
  };

  getStayTunedLabel = () => {
    return cy
      .get(STAY_TUNED_LABEL)
      .should('be.visible')
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

export default new homePageLocatorManager();
