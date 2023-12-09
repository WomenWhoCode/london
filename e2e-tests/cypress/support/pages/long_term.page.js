import longTermLocatorManager from '../locators/long_term_page/long_term_page.locate';

const NUMBER_TIMELINE_POINTS = 11;

export function verifyLongTermUI() {
    longTermLocatorManager.validatePageHeader();
    longTermLocatorManager.getTimelinePointsContainer().children().should('have.length', NUMBER_TIMELINE_POINTS);
    longTermLocatorManager.validateOptionPoints();
}