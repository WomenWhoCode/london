import homeHeaderLocatorManager from '../locators/home_page/home_header.locate';

export function switchToPage(pageName) {
  switch (pageName) {
    case 'Home':
      homeHeaderLocatorManager.getHomeTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Mentors':
      homeHeaderLocatorManager.getMentorsTab().click();
      cy.url().should('include', '/london/mentors');
      break;
    case 'Resources':
      homeHeaderLocatorManager.getResourcesTab().click();
      cy.url().should('include', '/london/resources');
      break;
    case 'How it works':
      homeHeaderLocatorManager.getHowItWorksTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Team':
      homeHeaderLocatorManager.getTeamTab().click();
      cy.url().should('include', '/london/team');
      break;
    default:
      break;
  }
}
