const PAGE_HEADER = 'h1';
const TIMELINE_GRAPH = '.timeline';
const TIMELINE_HEADER_1 = ':nth-child(1) > h4';
const TIMELINE_HEADER_2 = ':nth-child(2) > h4';
const TIMELINE_HEADER_3 = ':nth-child(3) > h4';
const TIMELINE_HEADER_4 = ':nth-child(4) > h4';
const TIMELINE_HEADER_5 = ':nth-child(5) > h4';
const TIMELINE_HEADER_6 = ':nth-child(6) > h4';
const TIMELINE_HEADER_7 = ':nth-child(7) > h4';
const TIMELINE_HEADER_8 = ':nth-child(8) > h4';

const TIMELINE_DESCRIPTION_1 = ':nth-child(1) > .description';
const TIMELINE_DESCRIPTION_2 = ':nth-child(2) > .description';
const TIMELINE_DESCRIPTION_3 = ':nth-child(3) > .description';
const TIMELINE_DESCRIPTION_4 = ':nth-child(4) > .description';
const TIMELINE_DESCRIPTION_5 = ':nth-child(5) > .description';
const TIMELINE_DESCRIPTION_6 = ':nth-child(6) > .description';
const TIMELINE_DESCRIPTION_7 = ':nth-child(7) > .description';
const TIMELINE_DESCRIPTION_8 = ':nth-child(8) > .description';

class adHocLocatorManager {
  getPageHeader = () => {
    return cy.get(PAGE_HEADER).shouldBeVisible();
  };

  validatePageHeader = () => {
    return this.getPageHeader().should('contain', 'Ad-hoc Relationship Format');
  };

  verifyTimelineExists = () => {
    return cy.get(TIMELINE_GRAPH).should('exist');
  };

  validateTimelineHeaders = () => {
    cy.get(TIMELINE_HEADER_1)
      .should('exist')
      .and('contain', 'Application period');
    cy.get(TIMELINE_HEADER_2)
      .should('exist')
      .and('contain', 'Mentee selection');
    cy.get(TIMELINE_HEADER_3)
      .should('exist')
      .and('contain', 'Mentor notification');
    cy.get(TIMELINE_HEADER_4)
      .should('exist')
      .and('contain', 'Scheduling sessions');
    cy.get(TIMELINE_HEADER_5)
      .should('exist')
      .and('contain', 'Session preparation');
    cy.get(TIMELINE_HEADER_6).should('exist').and('contain', 'Session');
    cy.get(TIMELINE_HEADER_7).should('exist').and('contain', 'Feedback');
    cy.get(TIMELINE_HEADER_8)
      .should('exist')
      .and('contain', 'Program evaluation');
  };

  validateTimelineDescriptions = () => {
    cy.get(TIMELINE_DESCRIPTION_1)
      .should('exist')
      .and(
        'contain',
        'Every month (from May to November), interested mentees will have the opportunity to apply to the one-time mentorship session program. The application process will be open '
      )
      .and('contain', 'the first week of the month')
      .and(
        'contain',
        ' and the applicants will need to provide information about their background, interests, and goals for the mentorship.'
      );

    cy.get(TIMELINE_DESCRIPTION_2)
      .should('exist')
      .and(
        'contain',
        'Once the application period has ended, the Mentorship Programme Team will review the applications and select the mentees who will participate in the program for the month.'
      );

    cy.get(TIMELINE_DESCRIPTION_3)
      .should('exist')
      .and(
        'contain',
        'The Mentorship Programme Team will send a list of selected mentees to the mentors, along with their profiles and information about their goals and expectations for the mentorship.'
      );

    cy.get(TIMELINE_DESCRIPTION_4)
      .should('exist')
      .and(
        'contain',
        'The mentors will directly provide the mentees with a Calendly link or their availability to schedule the session. Mentorship team will inform the mentees by email or slack when the mentor is not available.'
      );

    cy.get(TIMELINE_DESCRIPTION_5)
      .should('exist')
      .and(
        'contain',
        'Before each session, mentors and mentees should prepare and plan for the meeting, setting clear goals and objectives for the session.'
      );

    cy.get(TIMELINE_DESCRIPTION_6)
      .should('exist')
      .and(
        'contain',
        "During the session, mentor and mentee should engage in meaningful and productive discussions, working towards the goals and objectives. The mentor should provide guidance, advice, and support the mentee's development skills and knowledge."
      );

    cy.get(TIMELINE_DESCRIPTION_7)
      .should('exist')
      .and(
        'contain',
        "After one-time session mentors will ask the mentee's feedback on the session and the program itself."
      );

    cy.get(TIMELINE_DESCRIPTION_8)
      .should('exist')
      .and(
        'contain',
        'Both mentor and mentee are responsible for informing the Mentorship Programme Team about the session taking place and providing feedback afterwards. At the end of each month, the Mentorship Programme Team will collect feedback from mentors and evaluate feedback from mentees to identify areas for improvement and make any necessary adjustments. '
      );
  };
}

export default new adHocLocatorManager();
