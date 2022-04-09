import { getQuestions } from './questions';
import { runCli } from './run-cli';
import type { Questions } from './types/questions';

/**
 * Run the command line interface.
 *
 * @param args Command line arguments
 */
export const run = async (args: string[]) => {
  const cli = await runCli(args);

  let answers = getInitialAnswers(cli);

  if (!cli.noInteraction) {
    answers = await getInteractiveAnswers(answers);
  }

  console.log('answers', answers);
};

const getInitialAnswers = (cliArguments: Questions): Questions => ({
  name: cliArguments.name,
  dest: cliArguments.dest,
  type: cliArguments.type,
  javascript: cliArguments.javascript,
  withStory: cliArguments.withStory,
  withTest: cliArguments.withTest,
  additionalFiles: [
    ...(cliArguments.withStory ? 'story' : []),
    ...(cliArguments.withTest ? 'test' : []),
  ] as Questions['additionalFiles'],
});

const getInteractiveAnswers = async (initialAnswers: Questions): Promise<Questions> => {
  const answers = await getQuestions(initialAnswers);
  return {
    ...answers,
    withStory: answers.additionalFiles?.includes('story'),
    withTest: answers.additionalFiles?.includes('test'),
  };
};
