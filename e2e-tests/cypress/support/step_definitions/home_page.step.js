import { When } from 'cypress-cucumber-preprocessor/steps';
import {
  openHomePage,
  verifyActivePageUrl,
  verifyHomeUIElements,
  clickCheckMoreDetails,
  clickCheckOurMentors,
  verifyFeedbackHeader,
  verifyCarouselExists,
  switchToNextCarouselSlide,
  switchToPreviousCarouselSlide,
  clickNextArrowMultipleTimes,
  clickPreviousArrowMultipleTimes,
  compareCarouselSlideWithRef
} from '../pages/home.page';

When('I visit Home page', () => {
  openHomePage();
});

And('I verify the {string} active tab url', (tabName) => {
  verifyActivePageUrl(tabName);
});

And('I verify all UI elements on the Home page', (tabName) => {
  verifyHomeUIElements();
});

And('I click Check more details button', () => {
  clickCheckMoreDetails();
});

And('I click Check our mentors button', () => {
  clickCheckOurMentors();
});

And('I validate the Feedback header', () => {
  verifyFeedbackHeader();
});

And('I validate that mentors feedback carousel exists', () => {
  verifyCarouselExists();
});

And('I can switch to the next carousel slide', () => {
  switchToNextCarouselSlide();
});

And('I can switch to the previous carousel slide', () => {
  switchToPreviousCarouselSlide();
});

And('I click the next arrow in carousel {string} times', (numberOfClicks) => {
  clickNextArrowMultipleTimes(numberOfClicks);
});

And('I click the previous arrow in carousel {string} times', (numberOfClicks) => {
  clickPreviousArrowMultipleTimes(numberOfClicks);
});

And('I compare slide {string} of the carousel with reference', (slideNumber) => {
  compareCarouselSlideWithRef(slideNumber);
});

