const { join } = require('path');

module.exports = {
  rootDir: join(__dirname, '..'),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/configs/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.+.stories.tsx$',
    '.+dist.+'
  ],
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.+.stories.tsx$',
    '.+dist.+'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -20
    }
  },
  reporters: ['default', 'jest-junit']
};
