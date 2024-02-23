import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  switchToPage,
  verifyFooter,
  verifyHeaderTabs,
  verifyHeaderLogo,
  goBackHomeWithLogo
} from '../pages/general.js';

import {
  verifyHomeHeader
} from '../pages/home.page.js';

Then('I switch to {string} page', (pageName) => {
  switchToPage(pageName);
});

And('I verify the footer', () => {
  verifyFooter();
});

And('I verify the header', () => {
  verifyHomeHeader();
});

And("I verify the header's logo", () => {
  verifyHeaderLogo();
});

And("I verify all the header's tabs", () => {
  verifyHeaderTabs();
});

And('I scroll the page to {string}', (scrollDirection) => {
  cy.scrollTo(scrollDirection);
});

And('I press ENTER key', () => {
  cy.focused().type('{enter}');
});

And('I copy {string} test data to temporary folder', (fileName) => {
  cy.copyDataFile(fileName);
});

And('I get back to the Home page using WWC logo', () => {
  goBackHomeWithLogo();
});