import { When } from 'cypress-cucumber-preprocessor/steps';
import {
    verifyFAQElements,
    expandCollapseElements
} from '../pages/faq.page';

When('I verify all UI elements on the FAQ page', () => {
    verifyFAQElements();
});

When('I can expand and collapse each section on the FAQ page', () => {
    expandCollapseElements();
});