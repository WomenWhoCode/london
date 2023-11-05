import { When } from 'cypress-cucumber-preprocessor/steps';
import {
  verifyTeamPageUIElements,
  verifyTeamData,
  verifyCollaboratorsData,
} from '../pages/team.page';

And('I verify all UI elements on the Team page', () => {
  verifyTeamPageUIElements();
});

And('I verify team data', () => {
  verifyTeamData();
});

And('I verify collaborators data', () => {
  verifyCollaboratorsData();
});
