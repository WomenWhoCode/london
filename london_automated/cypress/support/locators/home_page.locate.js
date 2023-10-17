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
}

export default new homePageLocatorManager();
