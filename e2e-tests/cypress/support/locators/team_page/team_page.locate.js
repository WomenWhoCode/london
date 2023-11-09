const CONTRIBUTORS_HEADER = '.section.contributors > h2';
const CTA_JOIN = '.section > h2';


class teamLocatorManager {
  validateTeamHeader = () => {
    return cy.get('h1').shouldBeVisible().should('contain', 'Meet our core team');
  };

  validateCollaboratorsHeader = () => {
    return cy.get(CONTRIBUTORS_HEADER).shouldBeVisible().should('contain', 'Contributors');
  }; 

  validateJoinMessage = () => {
    return cy.get(CTA_JOIN).shouldBeVisible().should('contain', 'Feel free to join us as a contributor!');
  }; 

  validateLearnMoreButton = () => {
    return cy.get('.btn').contains('click here to learn more').shouldBeVisible().should('have.attr', 'href', 'https://github.com/WomenWhoCode/london#contributing');
  }; 

   //Mentors cards
   getAllTeamCards = () => {
    return cy.get('.card').should('exist');
  };

}

export default new teamLocatorManager();
