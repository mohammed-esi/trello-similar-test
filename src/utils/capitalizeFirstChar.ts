/**
 * Capitalizes the first character of a string.
 * @param str - The string to be capitalized.
 * @returns The string with the first character capitalized.
 */
const capitalizeFirstChar = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalizeFirstChar;
