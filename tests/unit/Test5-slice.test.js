import chai from 'chai';
import slice from '../../src/slice.js'; // File under test
const { expect } = chai;


describe('Slice /src/slice.js function', function() {
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