import chai from 'chai';
import defaultTo from '../../src/defaultTo.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('DefaultTo /src/defaultTo.js function', () => {
  it('should return defaultValue when value is `null`', () => {
    expect(defaultTo(null, 1)).to.equal(1);
  });

  it('should return defaultValue when value is `Nan`', () => {
    expect(defaultTo(NaN, 1)).to.equal(1);
  });

  it('should return defaultValue when value is `undefined`', () => {
    expect(defaultTo(undefined, 1)).to.equal(1);
  });

  it('should return value even if it is falsy', () => {
    // List of falsy values https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    expect(defaultTo(false, 1)).to.equal(false);
    expect(defaultTo("", 1)).to.equal("");
    expect(defaultTo(0, 1)).to.equal(0);
  });

  if('should return value when it is valid', () => {
    expect(defaultTo(1,2).to.equal(1));
    expect(defaultTo('test',0).to.equal('test'));
    expect(defaultTo([1,2,3],10).to.deep.equal([1,2,3]));
    expect(defaultTo({test:'test'})).to.deep.equal({test:'test'});
    expect(defaultTo(true,false)).to.equal(true);
  });

});