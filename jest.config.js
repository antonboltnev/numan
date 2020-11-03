module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  cache: true,
  coverageReporters: ["html", "text-summary"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)",
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
  ],
  collectCoverageFrom: [
    "!src/**/*.spec.js",
    "src/App.vue",

    // Components
    "src/components/*.vue",
    "src/components/ui/*.vue",
    "src/components/*.js",

    // Plugins
    "!src/**/plugins/vee-validate.js",

    // Utilites
    "src/utilites/*.js",

    // Store
    "src/vuex/actions/*.js",
    "src/vuex/mutations/*.js",
    "src/vuex/state/*.js",
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
};
