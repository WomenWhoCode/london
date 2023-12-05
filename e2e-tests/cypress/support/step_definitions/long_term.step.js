import { When } from 'cypress-cucumber-preprocessor/steps';
import {
    verifyLongTermUI
} from '../pages/long_term.page';

When('I verify all UI elements on the Long-term timeline page', () => {
    verifyLongTermUI();
});