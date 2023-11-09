const BANNER = '.banner'

class homeHeaderLocatorManager {
  getHomeBanner = () => {
    return cy.get(BANNER).shouldBeVisible();
  };

  validateHomeHeader = () => {
    return cy.get('h1').should('contain', 'Mentorship Programme 4.0');
  };

  validateHomeSubheader = () => {
    return cy.get('h3').should('contain', 'Women Who Code London');
  };
}

  export default new homeHeaderLocatorManager();