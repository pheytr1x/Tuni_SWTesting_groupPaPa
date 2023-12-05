/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 
 */



import chai from 'chai';
import map from '../../src/map.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Test 7. MAP /src/map.js function', function() {
  it('should apply the function to each element of the array', function() {
    const array = [1, 2, 3];
    const result = map(array, x => x * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it('should pass the index to the function', function() {
    const array = [1, 2, 3];
    const result = map(array, (x, i) => x * i);
    expect(result).to.deep.equal([0, 2, 6]);
  });

  it('should pass the original array to the function', function() {
    const array = [1, 2, 3];
    const result = map(array, (x, i, arr) => x * arr.length);
    expect(result).to.deep.equal([3, 6, 9]);
  });

  it('should return an empty array if the input array is empty', function() {
    const array = [];
    const result = map(array, x => x * 2);
    expect(result).to.deep.equal([]);
  });
});