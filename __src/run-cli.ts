import yargs from 'yargs';
import type { Questions } from './types/questions';

type Arguments = Partial<{
  dryRun: boolean;
  noInteraction: boolean;
}> &
  Questions & {
    [x: string]: unknown;
    _: (string | number)[];
    $0: string;
  };

/**
 * Start the command line interface and set up the arguments.
 *
 * @param args Command line arguments
 * @returns The arguments object
 */
export const runCli = (args: string[]): Arguments | Promise<Arguments> => {
  return yargs(args)
    .parserConfiguration({ 'boolean-negation': false })
    .usage('Usage: $0 <command> [optional arguments]')
    .option('name', {
      alias: 'n',
      describe: 'The name of the new element.',
      type: 'string',
    })
    .option('type', {
      alias: 't',
      describe: 'Type of the element',
      choices: ['component', 'page'],
      default: 'component',
    })
    .option('dest', {
      alias: 'd',
      describe: 'Destination path',
      type: 'string',
      default: 'src/components',
    })
    .option('javascript', {
      describe: 'Generate ".js" files instead of ".tsx"',
      type: 'boolean',
      default: false,
    })
    .option('with-story', {
      describe: 'Create additional story file',
      type: 'boolean',
      default: false,
    })
    .option('with-test', {
      describe: 'Create additional test file',
      type: 'boolean',
      default: false,
    })
    .option('no-interaction', {
      describe: 'Do not show prompts',
      type: 'boolean',
      default: false,
    })
    .option('dry-run', {
      describe: 'Only print output without generating files',
      type: 'boolean',
      default: false,
    })
    .help()
    .version()
    .wrap(100)
    .parse();
};
