import adHocLocatorManager from '../locators/ad_hoc_page/ad_hoc.locate';

export function verifyAdHocElements() {
    adHocLocatorManager.validatePageHeader();
    adHocLocatorManager.verifyTimelineExists();
    adHocLocatorManager.validateTimelineHeaders();
    adHocLocatorManager.validateTimelineDescriptions();
}