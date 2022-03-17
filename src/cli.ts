import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

type Answers = {
  dest: string;
  story?: boolean;
  test?: boolean;
  'dry-run'?: boolean;
  dryRun?: boolean;
  'no-interaction'?: boolean;
  noInteraction?: boolean;
};

type Argv = {
  [x: string]: unknown;
  _: (string | number)[];
  $0: string;
} & Answers;

type Args = Argv | Promise<Argv>;

export default class Cli {
  args: Args;

  constructor(processArgv: string[]) {
    this.args = this.collectArgs(processArgv);
  }

  collectArgs(processArgv: string[]): Args {
    return yargs(hideBin(processArgv))
      .usage('Usage: $0 --dest="src/components" [optional arguments]')
      .option('dest', {
        alias: 'd',
        describe: 'Destination path where to generated',
        demandOption: true,
        type: 'string',
      })
      .option('story', {
        alias: 's',
        describe: 'Create additional story file',
        type: 'boolean',
      })
      .option('test', {
        alias: 't',
        describe: 'Create additional test file',
        type: 'boolean',
      })
      .option('no-interaction', {
        alias: 'i',
        describe: 'Do not show prompts',
        type: 'boolean',
      })
      .option('dry-run', {
        describe: 'Only display output without generating files',
        type: 'boolean',
      })
      .help()
      .version().argv;
  }
}
