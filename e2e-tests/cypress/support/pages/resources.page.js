import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

const EVENTS_FILE = 'temporary/events.yml';
const RESOURCES_FILE = 'temporary/resources.yml';
const BLOG_POSTS_FILE = 'temporary/blogs.yml';

export function verifyResourceSection() {
  resourcesLocatorManager.validateResourcesPageHeader();
  cy.copyDataFile('resources.yml');
  cy.fixture(RESOURCES_FILE).then((file) => {
    const expectedEvents = YAML.parse(file);
    resourcesLocatorManager.getResourcesCards()
      .should('have.length', expectedEvents.length)
      .each(($option, index) => {
        resourcesLocatorManager.validateResourcesCards($option, expectedEvents, index);
      });
  });
}

export function verifyEventsSection() {
  resourcesLocatorManager.validateEventHeader();
  cy.copyDataFile('events.yml');
  cy.fixture(EVENTS_FILE).then((file) => {
    const expectedEvents = YAML.parse(file);
    resourcesLocatorManager.getEventsCards()
      .should('have.length', expectedEvents.length)
      .each(($option, index) => {
        resourcesLocatorManager.validateEventCards($option, expectedEvents, index);
      });
  });
}

export function verifyBlogPostsSection() {
  resourcesLocatorManager.validateBlogPostsHeader();
  cy.copyDataFile('blogs.yml');
  cy.fixture(BLOG_POSTS_FILE).then((file) => {
    const expectedEvents = YAML.parse(file);
    resourcesLocatorManager.getBlogPostsCards()
      .should('have.length', expectedEvents.length)
      .each(($option, index) => {
        resourcesLocatorManager.validateBlogPostsCards($option, expectedEvents, index);
      });
  });
}
