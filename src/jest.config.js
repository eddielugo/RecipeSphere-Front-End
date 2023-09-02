
const path = require('path');
const fs = require('fs');
const assert = require('assert');
const mock = require('mock');
const sinon = require('sinon');

module.exports = {
    roots: ['src'], // Tell Jest to look for tests in the src folder
    transform: {
      '^.+\\.[jt]sx?$': 'ts-jest', // Use ts-jest to compile TSX files
    },
    compilerOptions: {
      esModuleInterop: true,
    },
  };