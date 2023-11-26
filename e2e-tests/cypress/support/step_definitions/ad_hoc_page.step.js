import { When } from 'cypress-cucumber-preprocessor/steps';
import {
    verifyAdHocElements
} from '../pages/ad_hoc.page';

When('I verify all UI elements on the Ad-hoc page', () => {
  verifyAdHocElements();
});
