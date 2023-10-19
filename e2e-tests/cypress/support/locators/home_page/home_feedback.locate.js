const FFEDBACK_TITLE = '.feedback > h2';
const FEEDBACK_BLOCK = '.active > .d-block';

class homeFeedbackLocatorManager {
  getFeedbackTitle = () => {
    return cy
      .get(FFEDBACK_TITLE)
      .shouldBeVisible()
      .contains('What do participants think about our Mentorship Programme?');
  };

  getFeedbackBlock = () => {
    return cy.get(FEEDBACK_BLOCK).shouldBeVisible();
  };
}
export default new homeFeedbackLocatorManager();
