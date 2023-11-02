const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    // reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
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
