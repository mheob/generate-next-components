#!/usr/bin/env node

const { run } = require('../dist');
const { isValidNodeVersion, printOutdatedNodeVersionErrorMessage } = require('../dist/utils');

if (!isValidNodeVersion) {
  printOutdatedNodeVersionErrorMessage();
  process.exit(1);
}

run(process.argv.slice(2));
