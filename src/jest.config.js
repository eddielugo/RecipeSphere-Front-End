const path = require('path');
const fs = require('fs');
const assert = require('assert');
const mock = require('mock');
const sinon = require('sinon');

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
