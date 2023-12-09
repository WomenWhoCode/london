const PAGE_HEADER = 'h1';
const TIMELINE_POINTS_CONTAINER = '.timeline';
const TIMELINE_OPTION_DATE = '.date'

class longTermLocatorManager {
  getPageHeader = () => {
    return cy.get(PAGE_HEADER).shouldBeVisible();
  };

  validatePageHeader = () => {
    return this.getPageHeader().should('contain', 'Long-Term Relationship');
  };

  getTimelinePointsContainer = () => {
    return cy.get(TIMELINE_POINTS_CONTAINER).shouldBeVisible();
  };

  validateOptionPoints = () => {
    cy.fixture('test_data/long_term_points.json').then((points) => {
        const timelinePoints = points.timelinePoints;
        this.getTimelinePointsContainer()
          .children()
          .should('have.length', timelinePoints.length)
          .each(($option, index) => {
            cy.wrap($option).find(TIMELINE_OPTION_DATE).should('contain', timelinePoints[index].date);
            cy.wrap($option).find('h4').should('contain', timelinePoints[index].point);
          });
      });
  };
  
}

export default new longTermLocatorManager();
