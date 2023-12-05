/**
 * TEST FOR SLICE FUNCTION
 * -----------------------
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. 
 * A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. 
 * A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */

import chai from 'chai';
import slice from '../../src/slice.js'; // File under test
const { expect } = chai;


describe('slice', function() {
  it('should return all elements from start to end', function() {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
  });

  it('should treat negative start as offset from the end', function() {
    const array = [1, 2, 3, 4];
    expect(slice(array, -2)).to.deep.equal([3, 4]);
  });

  it('should treat negative end as offset from the end', function() {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, -1)).to.deep.equal([2, 3]);
  });

  it('should return empty array if start is not less than end', function() {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2, 1)).to.deep.equal([]);
  });

  it('should return all elements from start to end of array if end is not provided', function() {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1)).to.deep.equal([2, 3, 4]);
  });

  it('should return empty array if array is empty', function() {
    const array = [];
    expect(slice(array, 1, 2)).to.deep.equal([]);
  });
});