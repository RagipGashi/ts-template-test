/**
 * Input is an array of integer where:
 * - array is of length >= 0
 * - array element values is a positive, negative integer, or 0.
 * - element values are integers and not of type double or float (input will never contain e.g. 12.3456)
 *
 * As a result the function should return an array with all odd numbers.
 *
 * Example:
 * - in: [-3,2,1,4,-4]
 * - out: [2,4,-4]
 *
 * @param {*} input
 */
export function getOddNumbers(input: Array<number>) {
  const oddArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) oddArr.push(input[i]);
  }
  return oddArr;
}
