import codeConductLocatorManager from '../locators/code_of_conduct_page/code_of_conduct.locate';

export function verifyCodeConductElements() {
  codeConductLocatorManager.validatePageHeader();
  codeConductLocatorManager.validateShortConductMenteesList();
  codeConductLocatorManager.validateShortConductMentorsList();
  codeConductLocatorManager.validateLearnMoreMenteesButton();
  codeConductLocatorManager.validateLearnMoreMentorsButton();
  codeConductLocatorManager.validateWWCConductHeader();
  codeConductLocatorManager.validateReadWWCConductButton();
}

export function openWWCCodeConduct() {
  const WWC_LINK = codeConductLocatorManager.getWWCConductLink();
  cy.window().then((win) => {
    cy.stub(win, 'open').as('Open');
  });
  cy.origin(WWC_LINK, { args: { WWC_LINK } }, ({ WWC_LINK }) => {
    cy.visit(WWC_LINK);
    cy.wait(1000);
    cy.url().should('include', WWC_LINK);
  });
}

export function expandCodeOfConductMentees() {
  codeConductLocatorManager.getLearnMoreMenteesButton().click();
  codeConductLocatorManager.validateFullConductMenteesList();
}

export function expandCodeOfConductMentors() {
  codeConductLocatorManager.getLearnMoreMentorsButton().click();
  codeConductLocatorManager.validateFullConductMentorsList();
}

export function collapseCodeOfConductMentees() {
  codeConductLocatorManager.getShowLessMenteesButton().click({ force: true });
  codeConductLocatorManager.validateShortConductMenteesList();
}

export function collapseCodeOfConductMentors() {
  codeConductLocatorManager.getShowLessMentorsButton().click({ force: true });
  codeConductLocatorManager.validateShortConductMentorsList();
}
