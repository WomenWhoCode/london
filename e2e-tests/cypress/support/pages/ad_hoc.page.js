import adHocLocateManager from '../locators/ad_hoc_page/ad_hoc.locate';

export function verifyAdHocElements() {
    adHocLocateManager.validatePageHeader();
    adHocLocateManager.verifyTimelineExists();
    adHocLocateManager.validateTimelineHeaders();
    adHocLocateManager.validateTimelineDescriptions();
}