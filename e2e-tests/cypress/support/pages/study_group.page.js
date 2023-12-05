import studyGroupLocatorManager from '../locators/study_group_page/study_group_page.locate';


export function verifyStudyGroupUI() {
    studyGroupLocatorManager.validatePageHeader();
    studyGroupLocatorManager.validatePageContainer();
    studyGroupLocatorManager.validateStartStepsContainer();
}