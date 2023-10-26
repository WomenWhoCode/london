const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const { isFileExist } = require('cy-verify-downloads');
module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'https://womenwhocode.github.io/london',
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('task', { isFileExist });
    },
  },
});
