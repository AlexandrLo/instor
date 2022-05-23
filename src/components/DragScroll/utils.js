/**
 * Limits number within given range
 *
 * @param {Number} num Number to clamp
 * @param {Number} min Minimum value
 * @param {Number} max Maximum value
 * @returns {Number}
 */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 *  Finds if the number is the specified range
 *
 * @param {Number} num Number to check
 * @param {Number} min Minimum value
 * @param {Number} max Maximum value
 * @return {Boolean} True if number is in range
 */
export const isInRange = (num, min, max) => {
  return num > min && num < max;
};
