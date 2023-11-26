const PAGE_HEADER = 'h2';
const CONDUCT_MENTEES_LIST = ':nth-child(1) > ol';
const CONDUCT_MENTORS_LIST = ':nth-child(2) > ol';
const LEARN_MORE_MENTEE_BUTTON = '#btn-mentee';
const LEARN_MORE_MENTOR_BUTTON = '#btn-mentor';
const SHOW_LESS_MENTEE_BUTTON = '#btn-mentee-hide';
const SHOW_LESS_MENTOR_BUTTON = '#btn-mentor-hide';

const WWC_CONDUCT_HEADER = 'h2.text-center';
const READ_WWC_CONDUCT_BUTTON = '.global-code > div.text-center > .btn';

const MENTEES_CONDUCT_POINTS = 5;
const MENTORS_CONDUCT_POINTS = 4;
const HIDDEN_MENTEES_POINTS_NUMBER = 9;
const HIDDEN_MENTORS_POINTS_NUMBER = 9;
const WWC_CODE_CONDUCT_LINK = 'https://www.womenwhocode.com/codeofconduct';


class codeConductLocatorManager {
  getPageHeader = () => {
    return cy.get(PAGE_HEADER).shouldBeVisible();
  };

  validatePageHeader = () => {
    return cy.get(PAGE_HEADER).shouldBeVisible().should('contain', 'Code Of Conduct for Mentees');
  };

  getConductMenteesList = () => {
    return cy.get(CONDUCT_MENTEES_LIST).shouldBeVisible();
  };

  validateFullConductMenteesList = () => {
    return cy.get(CONDUCT_MENTEES_LIST).find('span').children().should('have.length', HIDDEN_MENTEES_POINTS_NUMBER);
  };

  validateFullConductMentorsList = () => {
    return cy.get(CONDUCT_MENTORS_LIST).find('span').children().should('have.length', HIDDEN_MENTORS_POINTS_NUMBER);
  };

  validateShortConductMenteesList = () => {
    return cy.get(CONDUCT_MENTEES_LIST).shouldBeVisible().children().should('have.length', MENTEES_CONDUCT_POINTS);
  };

  getConductMentorsList = () => {
    return cy.get(CONDUCT_MENTORS_LIST).shouldBeVisible();
  };

  validateShortConductMentorsList = () => {
    return cy.get(CONDUCT_MENTORS_LIST).shouldBeVisible().children().should('have.length', MENTORS_CONDUCT_POINTS);
  };

  getLearnMoreMenteesButton = () => {
    return cy.get(LEARN_MORE_MENTEE_BUTTON).shouldBeVisible();
  };
  
  getLearnMoreMentorsButton = () => {
    return cy.get(LEARN_MORE_MENTOR_BUTTON).shouldBeVisible();
  };

  getShowLessMenteesButton = () => {
    return cy.get(SHOW_LESS_MENTEE_BUTTON).shouldBeVisible();
  };
  
  getShowLessMentorsButton = () => {
    return cy.get(SHOW_LESS_MENTOR_BUTTON).shouldBeVisible();
  };
  
  validateLearnMoreMenteesButton = () => {
    return cy.get(LEARN_MORE_MENTEE_BUTTON).shouldBeVisible().should('contain', 'Learn More');
  };

  validateLearnMoreMentorsButton = () => {
    return cy.get(LEARN_MORE_MENTOR_BUTTON).shouldBeVisible().should('contain', 'Learn More');
  };

  validateWWCConductHeader = () => {
    return cy.get(WWC_CONDUCT_HEADER).shouldBeVisible().should('contain', 'Women Who Code Code Of Conduct');
  };
  
  validateReadWWCConductButton = () => {
    return cy.get(READ_WWC_CONDUCT_BUTTON).should('contain', 'Read').should('have.attr', 'href', WWC_CODE_CONDUCT_LINK);
  };

  getWWCConductLink = () => {
    return WWC_CODE_CONDUCT_LINK;
  };
}

export default new codeConductLocatorManager();
