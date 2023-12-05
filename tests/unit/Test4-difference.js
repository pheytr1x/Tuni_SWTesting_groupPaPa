import chai from 'chai';
import difference from '../../src/difference.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Test 4. difference /src/difference.js function', () => {
  
  describe('Input validation', () => {

    /*

    The input validation functionality of the tested function is unclear. 
    The function has *some* input validation, but its behaviour is not
    documented or consistent. Therefore these tests may be out of scope.

    Until documentation improves, current functionality is 
    assumed to be correct to preserve current functionality.

    Following input validation is tested:
      - If the first arg is non-array, an empty array is returned.
      - If the second arg is non-array, it is ignored.
      - If the second arg is an array and any following arg is not, an empty array is returned.
    
    */

    it('should return an empty array if first input is not an array', () => {
  
      expect(difference(undefined, undefined)).to.deep.equal([]);
      expect(difference(undefined, [1,2,3])).to.deep.equal([]);
      expect(difference(1, [1,2,3])).to.deep.equal([]);
      expect(difference("not an array", [1,2,3])).to.deep.equal([]);
  
    });

    it('should ignore 2nd argument if its the only non-array and first argument is an array', () => {

      expect(difference([1,2,3], undefined)).to.deep.equal([1,2,3]);
      expect(difference([1,2,3], 1)).to.deep.equal([1,2,3]);
      expect(difference([1,2,3], "not an array")).to.deep.equal([1,2,3]);
      
      expect(difference([1,2], [1,2,3], undefined)).to.deep.equal([]);
      expect(difference([1,2], [1,2,3], 1)).to.deep.equal([]);
      expect(difference([1,2], [1,2,3], "not an array")).to.deep.equal([]);

    });

  });


  it('should always return a new array', () => {

    const arr = [1,2,3];

    const diff1 = difference(arr, [1]);
    const diff2 = difference([1], arr);

    arr.push(4);

    expect(diff1).to.not.deep.equal(arr);
    expect(diff2).to.not.deep.equal(arr);

  });

  it('should return an empty array when the first array is empty', () => {
    expect(difference([], [2, 3])).to.deep.equal([]);
  });

  it('should return the first array when the second array is empty', () => {
    expect(difference([2, 1], [])).to.deep.equal([2, 1]);
  });

  it('should return an empty array when all elements are in the second array', () => {
    expect(difference([2, 1], [2, 1, 3])).to.deep.equal([]);
  });

  it('should return the first array when no elements are in the second array', () => {
    expect(difference([2, 1], [3, 4])).to.deep.equal([2, 1]);
  });

  it('should return the difference of two arrays', () => {
    expect(difference([1], [2, 3])).to.deep.equal([1]);
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    
  });

  it('should return the difference of multiple arrays', () => {
    expect(difference([2, 1], [2, 3], [1, 4])).to.deep.equal([]);
    expect(difference(['one', 2, 1, 0, -1], [2, 3], [1, 0], ['test'])).to.deep.equal(['one', -1]);
  });

});