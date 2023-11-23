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

class homeGeneralLocatorManager {
  validateOverview = () => {
    return cy
      .get('.overview')
      .invoke('text')
      .then((text) => {
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

  validateMentorTitle = () => {
    cy.get(MENTOR_TITLE)
      .should('exist')
      .and('contain', 'You should apply to be a ');
    cy.get(MENTOR_TITLE).find('span').should('have.text', 'mentor');
    cy.get(MENTOR_TITLE).should('contain', ' if you:');
  };

  validateMentorTitle = () => {
    cy.get(MENTEE_TITLE)
      .should('exist')
      .and('contain', 'You should apply to be a ');
    cy.get(MENTEE_TITLE).find('span').should('have.text', 'mentee');
    cy.get(MENTEE_TITLE).should('contain', ' if you:');
  };

  verifyMentorConditions = () => {
    cy.get(MENTOR_CONDITION_1)
      .should('exist')
      .and('contain', '1. Want to extend your professional network');

    cy.get(MENTOR_CONDITION_2)
      .should('exist')
      .and('contain', '2. Want to contribute to the community');

    cy.get(MENTOR_CONDITION_3)
      .should('exist')
      .and('contain', '3. You are ready to share expertise');

    cy.get(MENTOR_CONDITION_4)
      .should('exist')
      .and(
        'contain',
        '4. You want to get a new perspective and learn from your mentees'
      );
  };

  verifyMenteeConditions = () => {
    cy.get(MENTEE_CONDITION_1)
      .should('exist')
      .and('contain', '1. Want to start career in software engineering');

    cy.get(MENTEE_CONDITION_2)
      .should('exist')
      .and('contain', '2. Want to find a better job');

    cy.get(MENTEE_CONDITION_3)
      .should('exist')
      .and('contain', '3. Want to be promoted at work');

    cy.get(MENTEE_CONDITION_4)
      .should('exist')
      .and('contain', '4. Want to apply for a leadership position');

    cy.get(MENTEE_CONDITION_5)
      .should('exist')
      .and('contain', '5. Need support in advancing your career');
  };

  validateJoinAsMentorButton = () => {
    return cy
      .get(JOIN_AS_MENTOR_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Join as a Mentor');
  };

  validateCheckMentorsButton = () => {
    return cy
      .get(CHECK_OUT_MENTORS_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Check our Mentors');
  };
}

export default new homeGeneralLocatorManager();
