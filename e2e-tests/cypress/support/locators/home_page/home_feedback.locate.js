const FFEDBACK_TITLE = '.feedback > h2';
const FEEDBACK_BLOCK = '.feedback';
const CAROUSEL_ITEM = '.carousel-item';
const NEXT_CAROUSEL_SLIDE_ARROW = '.carousel-control-next-icon';
const PREVIOUS_CAROUSEL_SLIDE_ARROW = '.carousel-control-prev-icon';


class homeFeedbackLocatorManager {
  validateFeedbackTitle = () => {
    return cy
      .get(FFEDBACK_TITLE)
      .shouldBeVisible()
      .should('contain', 'What do participants think about our Mentorship Programme?');
  };

  getFeedbackBlockLocator = () => {
    return FEEDBACK_BLOCK;
  };

  validateFeedbackBlock = () => {
    return cy.get(FEEDBACK_BLOCK).should('exist').shouldBeVisible();
  };

  validateCarouselItemsExist = () => {
    return cy.get(CAROUSEL_ITEM).should('have.length', 4);
  };

  getNextCarouselArrow = () => {
    return cy.get(NEXT_CAROUSEL_SLIDE_ARROW).shouldBeVisible();
  };

  getPreviousCarouselArrow = () => {
    return cy.get(PREVIOUS_CAROUSEL_SLIDE_ARROW).shouldBeVisible();
  };
}
export default new homeFeedbackLocatorManager();
