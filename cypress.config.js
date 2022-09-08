const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    experimentalStudio: true,
    defaultCommandTimeout:400000,
    execTimeout:400000,
    requestTimeout: 400000,
    taskTimeout:400000,
    pageLoadTimeout: 400000,
    responseTimeout: 400000,
    failOnStatusCode: true
  },
});
