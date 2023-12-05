const HEADER = 'h2';
const STUDY_GROUP_CONTAINER = '.study-group';
const START_STEPS_CONTAINER = '.col-12';

const SECTIONS_NUMBER = 5;
const START_STEPS_NUMBER = 7;


class studyGroupLocatorManager {
  getPageHeader = () => {
    return cy.get(HEADER).should('exist');
  };

  validatePageHeader = () => {
    return this.getPageHeader()
      .shouldBeVisible()
      .should('contain', 'Study Group');
  };

  getStudyGroupContainer = () => {
    return cy.get(STUDY_GROUP_CONTAINER).should('exist');
  };

  validatePageContainer = () => {
    return this.getStudyGroupContainer().children().should('have.length', SECTIONS_NUMBER);
  };

  getStepsContainer = () => {
    return cy.get(START_STEPS_CONTAINER).should('exist');
  };

  validateStartStepsContainer = () => {
    cy.fixture('test_data/study_group_start_steps.json').then((steps) => {
        const studyGroupStartSteps = steps.startSteps;
        this.getStepsContainer().find('ol').children().should('have.length', START_STEPS_NUMBER).each(($child, index) => {
            cy.wrap($child).find('span').should('contain', studyGroupStartSteps[index].step)
        });
    });
  };
}

export default new studyGroupLocatorManager();
