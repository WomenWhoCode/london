import { When } from 'cypress-cucumber-preprocessor/steps';
import {
    verifyCodeConductElements,
    openWWCCodeConduct,
    expandCodeOfConductMentees,
    expandCodeOfConductMentors,
    collapseCodeOfConductMentees,
    collapseCodeOfConductMentors
} from '../pages/code_conduct.page';

When('I verify all UI elements on the Code of conduct page', () => {
    verifyCodeConductElements();
});

And('I open WWC Code of Conduct', () => {
    openWWCCodeConduct();
});

And('I expand Code of Conduct for Mentees', () => {
    expandCodeOfConductMentees();
});

And('I expand Code of Conduct for Mentors', () => {
    expandCodeOfConductMentors();
});

And('I collapse Code of Conduct for Mentees', () => {
    collapseCodeOfConductMentees();
});

And('I collapse Code of Conduct for Mentors', () => {
    collapseCodeOfConductMentors();
});