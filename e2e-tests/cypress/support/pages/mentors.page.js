export function verifyMentorsData() {
  cy.readFile('mentorsData.json').then((testData) => {
    cy.readFile('../../../../mentors.yml').then((ymlFile) => {
      assert(fixture === ymlFile, 'files are matching').to.eq(true);
    });
  });
}
