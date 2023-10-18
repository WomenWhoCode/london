const HOME_TAB = '#nav-0';
const MENTORS_TAB = '#nav-1';
const RESOURCES_TAB = '#nav-2';
const HOW_IT_WORKS_TAB = '#drop3';
const TEAM_TAB = '#nav-4';

const BANNER = '.banner';

class homeHeaderLocatorManager {
  getHomeTab = () => {
    return cy.get(HOME_TAB).shouldBeVisible();
  };

  getMentorsTab = () => {
    return cy.get(MENTORS_TAB).shouldBeVisible();
  };

  getResourcesTab = () => {
    return cy.get(RESOURCES_TAB).shouldBeVisible();
  };

  getHowItWorksTab = () => {
    return cy.get(HOW_IT_WORKS_TAB).shouldBeVisible();
  };

  getTeamTab = () => {
    return cy.get(TEAM_TAB).shouldBeVisible();
  };

  getHomeBanner = () => {
    return cy.get(BANNER).shouldBeVisible();
  };

  getHomeHeader = () => {
    return cy.get('h1').should('contain', 'Mentorship Programme 4.0');
  };

  getHomeSubheader = () => {
    return cy.get('h3').should('contain', 'Women Who Code London');
  };
}

export default new homeHeaderLocatorManager();
