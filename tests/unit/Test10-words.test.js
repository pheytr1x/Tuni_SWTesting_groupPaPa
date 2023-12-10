import chai from 'chai';
import words from '../../src/words.js'; // FUT SUT DUT Source file
const { expect } = chai;


describe('Words /src/words.js function', function() {
  it('should split a string into words', function() {
    const string = 'fred, barney, & pebbles';
    const result = words(string);
    expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
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