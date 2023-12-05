const CONTRIBUTORS_HEADER = '.section.contributors > h2';
const CTA_JOIN = '.section > h2';
const CORE_TEAM_ROW = '.team > :nth-child(1) > .row';
const COLLABORATORS_TEAM_ROW = '.section.contributors > .row';
const MEMBER_CARD_TITLE = '.card > .card-body > .card-title';
const MEMBER_CARD_TEXT = '.card > .card-body > .card-text';
const NETWORK_LINKS = '.network';

class teamLocatorManager {
  assertLink(linkObject, expected) {
    cy.wrap(linkObject).should('have.attr', 'href', expected.trim());
  }

  validateTeamHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible()
      .should('contain', 'Meet our core team');
  };

  validateCollaboratorsHeader = () => {
    return cy
      .get(CONTRIBUTORS_HEADER)
      .shouldBeVisible()
      .should('contain', 'Contributors');
  };

  validateJoinMessage = () => {
    return cy
      .get(CTA_JOIN)
      .shouldBeVisible()
      .should('contain', 'Feel free to join us as a contributor!');
  };

  validateLearnMoreButton = () => {
    return cy
      .get('.btn')
      .contains('Click here to learn more')
      .shouldBeVisible()
      .should(
        'have.attr',
        'href',
        'https://github.com/WomenWhoCode/london#contributing'
      );
  };

  getAllTeamCards = () => {
    return cy.get('.card').should('exist');
  };

  getCoreTeamCards = () => {
    return cy.get(CORE_TEAM_ROW).children().should('exist');
  };

  getCollaboratorsCards = () => {
    return cy.get(COLLABORATORS_TEAM_ROW).children().should('exist');
  };

  validateCoreTeamNames = (option, expectedCoreTeamData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TITLE)
      .should('contain', expectedCoreTeamData[index].name);
  };

  validateCoreTeamPositions = (option, expectedCoreTeamData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TEXT)
      .first()
      .should('contain', expectedCoreTeamData[index].position);
  };

  validateCoreTeamComments = (option, expectedCoreTeamData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TEXT)
      .last()
      .should('contain', expectedCoreTeamData[index].comment);
  };

  validateCoreTeamSocialNetwork = (option, expectedNetworks) => {
    cy.wrap(option)
      .find('.card-body')
      .find(NETWORK_LINKS)
      .children()
      .each(($child, index) => {
        const linkObject = $child.find('a');
        this.assertLink(linkObject, expectedNetworks[index].link.trim());
      });
  };

  validateCollaboratorsNames = (option, expectedCollaboratorsData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TITLE)
      .should('contain', expectedCollaboratorsData[index].name);
  };

  validateCollaboratorsPositions = (option, expectedCollaboratorsData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TEXT)
      .first()
      .should('contain', expectedCollaboratorsData[index].position);
  };

  validateCollaboratorsComments = (option, expectedCollaboratorsData, index) => {
    cy.wrap(option)
      .find(MEMBER_CARD_TEXT)
      .last()
      .should('contain', expectedCollaboratorsData[index].comment);
  };

  validateCollaboratorsSocialNetworks = (option, expectedNetworks) => {
    cy.wrap(option)
      .find('.card-body')
      .find(NETWORK_LINKS)
      .children()
      .each(($child, index) => {
        const linkObject = $child.find('a');
        this.assertLink(linkObject, expectedNetworks[index].link.trim());
      });
  };
}

export default new teamLocatorManager();
