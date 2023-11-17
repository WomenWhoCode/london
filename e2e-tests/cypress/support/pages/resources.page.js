import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

const EVENTS_FILE = 'temporary/events.yml';

export function verifyResourceSection() {
  resourcesLocatorManager.validateResourcesPageHeader();
  cy.copyDataFile('resources.yml');
  resourcesLocatorManager.validateResourcesCards();
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
  resourcesLocatorManager.validateBlogPostsCards();
}
