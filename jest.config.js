const jestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
};

export default jestConfig;

// module.exports = {
//   testEnvironment: 'jest-environment-jsdom',
//   setupFiles: ['./jest.setup.cjs']
// }