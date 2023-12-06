import chai from 'chai';
import filter from '../../src/filter.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Test 6. Filter /src/filter.js function', () => {
  
  it('should always return a new array', () => {

    const arr = [1,2,3];
    const result = filter(arr, () => true);

    arr.push(4);

    expect(result).to.not.deep.equal(arr);
  });

  it('should return an empty array when the input array is null', () => {
    const arr = null;
    const result = filter(arr, () => true);
    expect(result).to.deep.equal([[]]);
  });

  it('should return an empty array when the input array is empty', () => {
    const arr = [];
    const result = filter(arr, () => true);
    expect(result).to.deep.equal([[]]);
  });

  it('should return an empty array when the predicate returns falsy for all elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, (value) => value < 0);
    expect(result).to.deep.equal([[]]);
  });

  it('should return an array of all elements for which the predicate returns truthy', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, (value) => value >= 3);
    expect(result).to.deep.equal([3, 4, 5]);
  });

  it('should work with objects', function() {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

});