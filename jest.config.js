module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/assetsTransformer.js",
    '\\.svg': '<rootDir>/src/__mocks__/svgrMock.js',
    "^components(.*)$": "<rootDir>/components$1",
    "^assets(.*)$": "<rootDir>/assets$1",
    "^config(.*)$": "<rootDir>/config$1",
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '\\.(ts|js)x?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
  ],
  moduleDirectories: ['node_modules', 'src']
}
