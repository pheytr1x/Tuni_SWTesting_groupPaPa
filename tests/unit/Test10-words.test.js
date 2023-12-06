/**
 * 
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */



import chai from 'chai';
import words from '../../src/words.js'; // FUT SUT DUT Source file
const { expect } = chai;


describe('words', function() {
  it('should split a string into words', function() {
    const string = 'fred, barney, & pebbles';
    const result = words(string);
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it('should split a string into words using a custom pattern', function() {
    const string = 'fred, barney, & pebbles';
    const result = words(string, /[^, ]+/g);
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it('should return an empty array if the string is empty', function() {
    const string = '';
    const result = words(string);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array with non-matching pattern', function() {
    const string = 'fred, barney, & pebbles';
    const result = words(string, 'non-matching-pattern');
    expect(result).to.deep.equal([]);
  });

  it('should handle unicode characters', function() {
    const string = 'déjà vu';
    const result = words(string);
    expect(result).to.deep.equal(['déjà', 'vu']);
  });
});