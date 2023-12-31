/**
 * These tests cover the basic functionality of the chunk function, 
 * including edge cases where the input array is null or the chunk size is less than 1.
 * 
 * Generated by GitHub Copilot with prompt "Basic tests for chunk function",
 * when providing the interface (but not implementation) of chunk function.
 */

import chai from 'chai';
import chunk from '../../src/chunk.js'; // Source file
const { expect } = chai;

describe('Chunk /src/chunk.js function', () => {
  it('should split an array into chunks of 2', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = chunk(array, 2);
    
    expect(result).to.deep.equal( [ ['a', 'b'], ['c', 'd'] ] );
  });

  it('should split an array into chunks of 3', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = chunk(array, 3);
    expect(result).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });

  it('should return an empty array when input array is null', () => {
    const array = null;
    const result = chunk(array, 3);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when size is less than 1', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = chunk(array, 0);
    expect(result).to.deep.equal([]);
  });
});