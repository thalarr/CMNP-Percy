const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'n3tj19',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
