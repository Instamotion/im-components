const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['gen-.+-types', '.+.stories.tsx$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
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
