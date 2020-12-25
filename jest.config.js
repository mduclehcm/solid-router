module.exports = {
  verbose: false,
  collectCoverageFrom: ['src/**'],
  coveragePathIgnorePatterns: [
    'src/index',
    'src/client',
    'src/server',
    'src/interfaces',
    'src/types',
  ],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    'solid-router': '<rootDir>/src/client.ts',
  },
};
