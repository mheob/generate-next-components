import chalk from 'chalk';
import semver from 'semver';
import packageJSON from '../../package.json';

const currentNodeVersion = process.versions.node;
const minNodeVersion = semver.minVersion(packageJSON.engines.node) || '16.13.0';

export const isValidNodeVersion = semver.gte(currentNodeVersion, minNodeVersion);

export const printOutdatedNodeVersionErrorMessage = () => {
  console.error(
    chalk.red('Error: ') +
      `You are running Node version ${chalk.yellowBright(currentNodeVersion)}. ` +
      `Node version ${chalk.yellowBright(minNodeVersion)} or higher is required. ` +
      'Please update your version of Node. '
  );
};
