import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  switchToPage,
  verifyFooter,
  verifyHeader,
  verifyHeaderTabs,
} from '../pages/navigation.page';

Then('I switch to {string} page', (pageName) => {
  switchToPage(pageName);
});

And('I verify the footer', () => {
  verifyFooter();
});

And('I verify the header', () => {
  verifyHeader();
});

And("I verify all the header's tabs", () => {
  verifyHeaderTabs();
});

And('I scroll the page to {string}', (scrollDirection) => {
  cy.scrollTo(scrollDirection);
});
