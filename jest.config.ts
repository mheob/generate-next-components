import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: { '^.+\\.(t|j)s$': '@swc/jest' },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['**/src/**/*.+(ts|js)', '!**/*.d.ts'],
};

export default config;
