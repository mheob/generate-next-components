import Cli from './cli';

export const cli = async (processArgv: string[]) => {
  new Cli(processArgv);
};
