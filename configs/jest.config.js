const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, '..'),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: [resolve(__dirname, 'jest.setup.js')],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  resolver: `${__dirname}/resolver.js`,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.+.stories.tsx$',
    '.+node_modules.+',
    '.+dist.+'
  ],
  transform: {
    "^.+\\.svg$": "jest-svg-transformer"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.+.stories.tsx$',
    '.+node_modules.+',
    '.+dist.+'
  ],
  reporters: ['default', 'jest-junit']
};
