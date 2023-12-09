import faqLocatorManager from '../locators/faq_page/faq.locate';
const FAQ_FILE = 'faq.yml';
const FAQ_FILE_PATH = Cypress.config('temporaryFolderRelativePath') + FAQ_FILE;
const SMALL_WAIT_INTERVAL = 1000;

export function verifyFAQElements() {
  faqLocatorManager.validatePageHeader();
  faqLocatorManager.getFAQSections();
  cy.copyDataFile(FAQ_FILE);

  cy.fixture(FAQ_FILE_PATH).then((file) => {
    const expectedFAQData = YAML.parse(file);
    faqLocatorManager
      .getFAQSections()
      .should('have.length', expectedFAQData.length + 1)
      .each(($option, index) => {
        if (index === 0) return;
        
        const correctedIndex = index - 1;
        if (expectedFAQData[correctedIndex]) {
          const questionValue = expectedFAQData[correctedIndex].question;
          const answerValue = expectedFAQData[correctedIndex].answer;
          cy.log('index = ' + index);
          cy.log('questionValue = ' + questionValue);
          faqLocatorManager.validateFAQSectionsTitle($option, questionValue);
          faqLocatorManager.validateFAQSectionsAnswer($option, answerValue);
        }
      });
  });
}

export function expandCollapseElements() {
  faqLocatorManager.getFAQSections().each(($option, index) => {
    if (index === 0) return;

    faqLocatorManager.getFAQSectionsTitle($option).click(); //expand
    faqLocatorManager.verifySectionTitleVisible($option);
    faqLocatorManager.verifySectionAnswerVisible($option);
    cy.wait(SMALL_WAIT_INTERVAL);

    faqLocatorManager.getFAQSectionsTitle($option).click(); //collapse
    cy.wait(SMALL_WAIT_INTERVAL);
    faqLocatorManager.verifySectionTitleVisible($option);
    faqLocatorManager.verifySectionAnswerNotVisible($option);
  });
}
