import { Then } from 'cypress-cucumber-preprocessor/steps';

import { verifyMentorsData } from '../pages/mentors.page';

Then('I verify mentors data', () => {
  verifyMentorsData();
});
