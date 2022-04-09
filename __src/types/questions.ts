export type Questions = Partial<{
  additionalFiles: Partial<['story', 'test']>;
  dest: string;
  javascript: boolean;
  name: string;
  type: string;
  withStory: boolean;
  withTest: boolean;
}>;
