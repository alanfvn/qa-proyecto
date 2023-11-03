const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    // reporter
    trashAssetsBeforeRuns: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      inlineAssets: true,
      overwrite: false,
      html: false,
      json: true,
    },
    // otro
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
    baseUrl: 'http://localhost/',
    testIsolation: false,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
  },
});
