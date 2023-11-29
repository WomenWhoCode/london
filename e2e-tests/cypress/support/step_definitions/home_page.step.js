import { When } from 'cypress-cucumber-preprocessor/steps';
import {
  openHomePage,
  verifyActivePageUrl,
  verifyHomeUIElements,
  clickCheckMoreDetails,
  openFooterSocialLink
} from '../pages/home.page';

When('I visit Home page', () => {
  openHomePage();
});

And('I verify the {string} active tab url', (tabName) => {
  verifyActivePageUrl(tabName);
});

And('I verify all UI elements on the Home page', (tabName) => {
  verifyHomeUIElements();
});

And('I click Check more details button', () => {
  clickCheckMoreDetails();
});

And('I open {string} WWC link from the footer', (socialLink) => {
  openFooterSocialLink(socialLink);
});
