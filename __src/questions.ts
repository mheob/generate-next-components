import { prompt } from 'inquirer';
import type { Questions } from './types/questions';
import {
  isValidPath,
  isValidPathErrorMessage,
  isValidStringFormat,
  isValidStringFormatErrorMessage,
} from './utils';

/**
 * Get the questions answered by the user.
 *
 * @param answers The initial arguments from the command line
 * @returns The answers from the user as object
 */
export const getQuestions = async (answers: Questions): Promise<Questions> => {
  return await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'How to name the new element?',
      default: answers.name,
      validate: (value: string) =>
        isValidStringFormat(value) ? true : isValidStringFormatErrorMessage('Name'),
    },
    {
      // TODO: Maybe use "inquirer-fuzzy-path" (https://github.com/adelsz/inquirer-fuzzy-path)
      type: 'input',
      name: 'dest',
      message: 'Where to generate the files?',
      default: answers.dest,
      validate: (value: string) =>
        isValidPath(value) ? true : isValidPathErrorMessage('Destination'),
    },
    {
      type: 'list',
      name: 'type',
      message: 'Type of the element:',
      choices: ['component', 'page'],
      default: answers.type,
    },
    {
      type: 'list',
      name: 'javascript',
      message: 'Generate JavaScript files instead of TypeScript?',
      choices: [
        { name: 'JavaScript', value: true },
        { name: 'TypeScript', value: false },
      ],
      default: answers.javascript ? 0 : 1,
    },
    {
      type: 'checkbox',
      name: 'additionalFiles',
      message: 'Select additional files to generate:',
      choices: [
        { name: 'Story', value: 'story', checked: answers.withStory },
        { name: 'Test', value: 'test', checked: answers.withTest },
      ],
    },
  ]);
};
