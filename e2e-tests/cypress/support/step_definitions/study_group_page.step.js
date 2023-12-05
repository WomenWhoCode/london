import { And } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyStudyGroupUI
} from '../pages/study_group.page';

And('I verify all UI elements on the Study group page', () => {
    verifyStudyGroupUI();
});
