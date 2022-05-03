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
