const path = require('path');
const fs = require('fs');
const assert = require('assert');
const mock = require('mock');
const sinon = require('sinon');

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    //'^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    "<rootDir>/tests/**/*.test.js", // Added this line to include 'tests' folder
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/fileMock.js',
    //'\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
