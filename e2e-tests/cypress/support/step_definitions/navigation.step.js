import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  switchToPage,
  verifyFooter,
  verifyHeaderTabs,
  verifyHeaderLogo
} from '../pages/navigation.page';

import {
  verifyHomeHeader
} from '../pages/home.page';

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
