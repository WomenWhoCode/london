import { When } from 'cypress-cucumber-preprocessor/steps';
import {
  openHomePage,
  verifyHomeTabs,
  verifyActivePageUrl,
  verifyUIElements,
} from '../pages/home.page';

When('I visit Home page', () => {
  openHomePage();
});

And('I can see all headers tabs', () => {
  verifyHomeTabs();
});

And('I verify the {string} active tab url', (tabName) => {
  verifyActivePageUrl(tabName);
});

And('I verify all UI elements on the {string} page', (tabName) => {
  verifyUIElements(tabName);
});
