const HOME_TAB = '#nav-0';
const MENTORS_TAB = '#nav-1';
const RESOURCES_TAB = '#nav-2';
const HOW_IT_WORKS_TAB = '#drop3';
const TEAM_TAB = '#nav-4';
const HEADER_LOGO = '.navbar-brand > .brand';

class headerLocatorManager {
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

  getHeaderLogo = () => {
    return cy.get(HEADER_LOGO).shouldBeVisible();
  };
}

export default new headerLocatorManager();
