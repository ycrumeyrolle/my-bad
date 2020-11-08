const esModules = ['svelte-routing', 'sveltefire'].join('|');

module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: ['js', 'json', 'svelte'],
  verbose: true,
  bail: false,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  collectCoverageFrom: ['./src/**/*.svelte', './src/**/*.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './src/config/',
    './src/data/',
    './src/main.js',
  ],
  resolver: './svelte-resolver.js',
};
