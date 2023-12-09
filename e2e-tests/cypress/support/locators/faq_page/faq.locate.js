const PAGE_HEADER = 'h2';
const FAQ_CONTAINER = '.faq';
const FAQ_SECTION_TITLE = '#accordion > .py-3 > .position-relative > .h4'
const FAQ_SECTION_ANSWER = '#accordion > .collapse > .card-body';

class faqLocatorManager {
  getPageHeader = () => {
    return cy.get(PAGE_HEADER).shouldBeVisible();
  };

  validatePageHeader = () => {
    return this.getPageHeader().shouldBeVisible().should('contain', 'FAQ');
  };

  getFAQSections = () => {
    return cy.get(FAQ_CONTAINER).children();
  };

  verifySectionTitleVisible = (option) => {
    return cy.wrap(option).find(FAQ_SECTION_TITLE).shouldBeVisible();
  };

  verifySectionAnswerVisible = (option) => {
    return cy.wrap(option).find(FAQ_SECTION_ANSWER).shouldBeVisible();
  };

  verifySectionAnswerNotVisible = (option) => {
    return cy.wrap(option).find(FAQ_SECTION_ANSWER).shouldNotBeVisible();
  };

  getFAQSections = () => {
    return cy.get(FAQ_CONTAINER).children();
  };

  getFAQSectionsTitle = (option) => {
    return cy.wrap(option).find(FAQ_SECTION_TITLE).should('exist');
  };

  validateFAQSectionsTitle = (option, title) => {
    cy.wrap(option).find(FAQ_SECTION_TITLE).should('contain', title);
  };

  validateFAQSectionsAnswer = (option, answer) => {
    const normalizedAnswer = answer.split('<br>', '').join();
    cy.wrap(option).click().find(FAQ_SECTION_ANSWER).should('contain', normalizedAnswer);
  };
}

export default new faqLocatorManager();
