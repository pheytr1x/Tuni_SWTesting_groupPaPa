import chai from 'chai';
import reduce from '../../src/reduce.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Reduce /src/reduce.js function', () => {
  it('should reduce an array to a single value', () => {
    const arr = [1, 2, 3];
    const result = reduce(arr, (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it('should reduce an object to a single value', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    const result = reduce(object, (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it('should work without an initial accumulator', () => {
    const arr = [1, 2, 3];
    const result = reduce(arr, (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it('should work with a non-zero initial accumulator', () => {
    const arr = [1, 2];
    const result = reduce(arr, (sum, n) => sum + n, 3);
    expect(result).to.equal(6);
  });

  it('should work with an object and a complex iteratee', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });
});
