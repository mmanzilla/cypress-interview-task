const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/individual',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {},
  },
});