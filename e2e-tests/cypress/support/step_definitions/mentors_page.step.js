import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyMentorsData,
  verifyMentorsUIElements,
} from '../pages/mentors.page';

Then('I verify mentors data', () => {
  verifyMentorsData();
});

And('I verify all UI elements on the Mentors page', () => {
  verifyMentorsUIElements();
});
