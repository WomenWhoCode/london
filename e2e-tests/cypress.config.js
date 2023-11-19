const { defineConfig } = require('cypress');
const { rmdir } = require('fs');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  temporaryFolderAbsolutePath: 'cypress/fixtures/temporary/',
  temporaryFolderRelativePath: '/temporary/',
  sourceDataFolder: '../_data/',
  e2e: {
    baseUrl: 'https://womenwhocode.github.io/london',
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('task', {
        deleteDataTempFolder(folderName) {
          console.log('deleting folder %s', folderName);

          return new Promise((resolve) => {
            rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error('Error to delete temp folder', err);
              }
              resolve(null);
            });
          });
        },
      });
    },
  },
});
