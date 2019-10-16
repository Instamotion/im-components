const base = require('./configs/jest.config');

module.exports = {
    ...base,
    coverageDirectory: "<rootDir>/coverage/"
};
