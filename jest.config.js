const base = require('./configs/jest.config');

module.exports = {
    ...base,
    projects: [
      "<rootDir>/packages/*/jest.config.js"
    ],
    coverageDirectory: "<rootDir>/coverage/"
};
