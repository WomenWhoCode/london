import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyResourceSection,
  verifyEventsSection,
  verifyBlogPostsSection
} from '../pages/resources.page';

Then('I verify UI elements on Resources Section', () => {
  verifyResourceSection();
});

Then('I verify UI elements on Events Section', () => {
  verifyEventsSection();
});


Then('I verify UI elements on Blog Posts Section', () => {
  verifyBlogPostsSection();
});
