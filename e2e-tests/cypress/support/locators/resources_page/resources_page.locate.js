const EVENTS = '.events > h2';
const RESOURCES_CARDS = '.material .card';
const EVENTS_CARDS = '.events .card';
const BLOG_POSTS_HEADER = '.blog > h2';
const BLOG_CARDS = '.blog .card';

// resources elements
const RESOURCES_TITLE = '.card-title';
const RESOURCES_IMAGE = '.card-img-top';
const RESOURCE_LINK = '.stretched-link';

// events elements
const EVENT_TITLE = '.card-title';
const EVENT_DESCRIPTION = '.card-text';
const EVENT_IMAGE = '.card-image';
const EVENT_CHECK_MORE = '.links';
const EVENT_YOUTUBE = '.card-content > ul > :nth-child(1) > a';
const EVENT_MEETUP = '.card-content > ul > :nth-child(2) > a';
const EVENT_DATE_FORMAT = '.card-body > :nth-child(2)';

// blog elements
const BLOG_TITLE = '.card-title';
const BLOG_DESCRIPTION = '.card-content .card-text';
const BLOG_DATE_AUTHOR = '.card-body > :nth-child(2)';
const BLOG_IMAGE = '.card-image';
const BLOG_LINK = '.link > a';

class resourcesLocatorManager {
  getResourcesHeaders = () => {
    return cy.get('h1').should('exist');
  };

  validateResourcesPageHeader = () => {
    return this.getResourcesHeaders()
      .shouldBeVisible()
      .should('contain', 'Resources');
  };

  getResourcesCards = () => {
    return cy.get(RESOURCES_CARDS).should('exist');
  };

  validateResourcesCards = (option, expectedEvents, index) => {
    cy.wrap(option)
      .find(RESOURCES_TITLE)
      .should('contain', expectedEvents[index].title);
    cy.wrap(option).find(RESOURCES_IMAGE).shouldBeVisible();
    cy.validateLink(option, RESOURCE_LINK, expectedEvents[index].link);
  };

  getEventsHeaders = () => {
    return cy.get(EVENTS).should('exist');
  };

  validateEventHeader = () => {
    return this.getEventsHeaders()
      .shouldBeVisible()
      .should('contain', 'Events');
  };

  getEventsCards = () => {
    return cy.get(EVENTS_CARDS).should('exist');
  };

  validateEventCards = (option, expectedEvents, index) => {
    cy.wrap(option)
      .find(EVENT_TITLE)
      .should('contain', expectedEvents[index].title);
    cy.wrap(option)
      .find(EVENT_DESCRIPTION)
      .should('contain', expectedEvents[index].description);
    cy.wrap(option).find(EVENT_IMAGE).shouldBeVisible();
    cy.wrap(option).find(EVENT_CHECK_MORE).should('contain', 'Check more:');
    cy.wrap(option)
      .find(EVENT_DATE_FORMAT)
      .should(
        'contain',
        expectedEvents[index].date + ' | ' + expectedEvents[index].format
      );
    cy.validateLink(
      option,
      EVENT_YOUTUBE,
      expectedEvents[index].links[0].youtube
    );
    cy.validateLink(
      option,
      EVENT_MEETUP,
      expectedEvents[index].links[1].meetup
    );
  };

  getBlogPostsHeaders = () => {
    return cy.get(BLOG_POSTS_HEADER).should('exist');
  };

  validateBlogPostsHeader = () => {
    return this.getBlogPostsHeaders()
      .shouldBeVisible()
      .should('contain', 'Blog Posts');
  };

  getBlogPostsCards = () => {
    return cy.get(BLOG_CARDS).should('exist');
  };

  validateBlogPostsCards = (option, expectedBlogs, index) => {
    cy.wrap(option)
      .find(BLOG_TITLE)
      .should('contain', expectedBlogs[index].title);
    cy.wrap(option)
      .find(BLOG_DESCRIPTION)
      .should('contain', expectedBlogs[index].description);
    cy.wrap(option).find(BLOG_IMAGE).shouldBeVisible();
    cy.wrap(option)
      .find(BLOG_DATE_AUTHOR)
      .should(
        'contain',
        expectedBlogs[index].date + ' | ' + expectedBlogs[index].author
      );
    cy.validateLink(option, BLOG_LINK, expectedBlogs[index].link);
  };
}

export default new resourcesLocatorManager();
