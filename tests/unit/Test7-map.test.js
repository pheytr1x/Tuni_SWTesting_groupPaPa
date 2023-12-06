import chai from 'chai';
import map from '../../src/map.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Map /src/map.js function', function() {
  it('should return an empty array when input array is null', function() {
    const array = null;
    const result = map(array, x => x * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });
  
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