const { defineConfig } = require('cypress')
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");


module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  experimentalInteractiveRunEvents: true,
  chromeWebSecurity: false,
  projectId: "82fqav",
  e2e: {
      env: {
          allure: true,
          allureReuseAfterSpec: true,
          allureLogCypress: true,
      },

    async setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
      
    },
    baseUrl: 'https://wlsf82-hacker-stories.web.app'
  }
});
