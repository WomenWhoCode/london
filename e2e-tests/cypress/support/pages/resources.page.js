import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

export function verifyResourceSection() {
    resourcesLocatorManager.validateResourcesPageHeader();
    resourcesLocatorManager.validateResourcesCards();
};

export function verifyEventsSection() {
    resourcesLocatorManager.validateEventHeader();
    resourcesLocatorManager.validateEventCards();
};

export function verifyBlogPostsSection() {
    resourcesLocatorManager.validateBlogPostsHeader();
    resourcesLocatorManager.validateBlogPostsCards();
};
