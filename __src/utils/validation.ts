/**
 * Checks if the given string value is not empty.
 *
 * @param value The string value to check
 * @returns `true` if the value is valid, otherwise the error message
 */
export const isEmptyString = (value: string) => {
  return value.trim().length > 0;
};

/**
 * Returns an error message.
 *
 * @param value The name of the element to check
 * @returns The error message
 */
export const isEmptyStringErrorMessage = (value: string) => `${value} is required`;

// i: Start and end with a letter (a-z or A-Z)
// i: In between letters, numbers or special chars "_, - or space" are allowed
const defaultStringFormat = /^[A-Za-z]+[\w -]*[A-Za-z]$/;

/**
 * Checks if the given string value is in the valid format.
 *
 * @param value The string value to check
 * @param stringFormat The string format to check against
 * @returns `true` if the value is valid, otherwise the error message
 */
export const isValidStringFormat = (value: string, stringFormat = defaultStringFormat) => {
  return !isEmptyString(value) && stringFormat.test(value);
};

/**
 * Returns an error message.
 *
 * @param value The name of the element to check
 * @returns The error message
 */
export const isValidStringFormatErrorMessage = (value: string) =>
  `${value} has to start with a letter, followed by letters, numbers or "_", "-" or "space"`;

/**
 * Checks if the given string value is in the valid format.
 *
 * @param value The string value to check
 * @returns `true` if the value is valid, otherwise the error message
 */
export const isValidPath = (value: string) => {
  const stringFormat = /^(.+)\/(.+)$/;
  return isValidStringFormat(value, stringFormat);
};

/**
 * Returns an error message.
 *
 * @param value The name of the element to check
 * @returns The error message
 */
export const isValidPathErrorMessage = (value: string) =>
  `${value} path has to be a valid path, e.g. "src/components"`;
