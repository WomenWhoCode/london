import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

const EVENTS_FILE = 'events.yml';
const EVENTS_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + EVENTS_FILE
const RESOURCES_FILE = 'resources.yml';
const RESOURCES_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + RESOURCES_FILE
const BLOG_POSTS_FILE = 'blogs.yml';
const BLOG_POSTS_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + BLOG_POSTS_FILE


export function verifyResourceSection() {
  resourcesLocatorManager.validateResourcesPageHeader();
  cy.copyDataFile(RESOURCES_FILE);
  cy.fixture(RESOURCES_FILE_PATH).then((file) => {
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
  cy.copyDataFile(EVENTS_FILE);
  cy.fixture(EVENTS_FILE_PATH).then((file) => {
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
  cy.copyDataFile(BLOG_POSTS_FILE);
  cy.fixture(BLOG_POSTS_FILE_PATH).then((file) => {
    const expectedEvents = YAML.parse(file);
    resourcesLocatorManager.getBlogPostsCards()
      .should('have.length', expectedEvents.length)
      .each(($option, index) => {
        resourcesLocatorManager.validateBlogPostsCards($option, expectedEvents, index);
      });
  });
}
