const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'https://womenwhocode.github.io/london',
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
