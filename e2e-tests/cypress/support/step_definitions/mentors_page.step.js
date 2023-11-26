import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyMentorsDataPresentation,
  verifyMentorsDataSkills,
  verifyMentorsDataMentees,
  verifyMentorsUIElements,
  typeInSearchMentorsInput,
  validateActiveSearchMentorsField,
  validateSingleSearchResult,
  validateMultipleSearchResult,
  clickSearchButton,
  clearSearchInput,
  verifyAllMentorsExistOnPage,
  expandAdvancedFilters,
  setFilterOption,
  getClearAllFiltersButton,
  validateNoMentorsMessage
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

And('I type {string} in the mentors search input', (inputText) => {
  typeInSearchMentorsInput(inputText);
});

Then('I verify that the mentors search input contains {string} text', (inputText) => {
  validateActiveSearchMentorsField(inputText);
});

Then('I can see correct search results for {string} query', (searchQuery) => {
  validateSingleSearchResult(searchQuery);
});

Then('I verify that the number of found mentors is equal to {string}', (numberMentors) => {
  validateMultipleSearchResult(numberMentors);
});

Then('I click the Search button', () => {
  clickSearchButton();
});

Then('I clear the mentors search input', () => {
  clearSearchInput();
});

Then('I can see the list as the previous mentor list', () => {
  verifyAllMentorsExistOnPage();
});

Then('I expand Advanced filters', () => {
  expandAdvancedFilters();
});

Then('I set {string} filter to {string} filter', (option, filterName) => {
  setFilterOption(option, filterName);
});

Then('I set {string} filter to {string} filter', (option, filterName) => {
  setFilterOption(option, filterName);
});

Then('I clear all filters', () => {
  getClearAllFiltersButton();
});

Then('I can see a message that no results found', () => {
  validateNoMentorsMessage();
});