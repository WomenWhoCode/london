import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

export function verifyResourceSection() {
    resourcesLocatorManager.validateResourcesPageHeader();
    cy.copyDataFile('resources.yml');
    resourcesLocatorManager.validateResourcesCards();
};

export function verifyEventsSection() {
    resourcesLocatorManager.validateEventHeader();
    cy.copyDataFile('events.yml');
    resourcesLocatorManager.validateEventCards();
};

export function verifyBlogPostsSection() {
    resourcesLocatorManager.validateBlogPostsHeader();
    cy.copyDataFile('blogs.yml');
    resourcesLocatorManager.validateBlogPostsCards();
};
