import { Then } from 'cypress-cucumber-preprocessor/steps';

import { switchToPage } from '../pages/navigation.page';

Then('I switch to {string} page', (pageName) => {
  switchToPage(pageName);
});
