import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyMentorsDataPresentation,
  verifyMentorsDataSkills,
  verifyMentorsDataMentees,
  verifyMentorsUIElements,
} from '../pages/mentors.page';

Then('I verify mentors cards: Presentation tab', () => {
  verifyMentorsDataPresentation();
});

Then('I verify mentors cards: Skills tab', () => {
  verifyMentorsDataSkills();
});

Then('I verify mentors cards: Mentees tab', () => {
  verifyMentorsDataMentees();
});

And('I verify all UI elements on the Mentors page', () => {
  verifyMentorsUIElements();
});
