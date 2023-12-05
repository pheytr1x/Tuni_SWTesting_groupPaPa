import chai from 'chai';
import memoize from '../../src/memoize.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('Test 8. Memoize /src/memoize.js function', () => {

  describe('Input validation', () => {

    it('should throw an error if first argument is not a function', () => {
      expect(() => memoize('not a function')).to.throw(TypeError);
    });

    it('should throw an error if resolver is provided but not a function', () => {
      expect(() => memoize(() => {}, 'not a function')).to.throw(TypeError);
    });

    it('should return a new function', () => {
      const testFunc = function() {};
      const memoizedFunc = memoize(testFunc);
      expect(memoizedFunc).to.be.a('function');
    });

  });


  it('should memoize function result', () => {
    let counter = 0;
    const testFunc = function() { counter += 1; return counter; };
    const memoizedFunc = memoize(testFunc);

    const funcCallOne = memoizedFunc();
    const funcCallTwo = memoizedFunc();

    expect(funcCallOne).to.equal(funcCallTwo);
    expect(counter).to.equal(1);
  });

  it('should memoize async function result', async () => {
    let counter = 0;
    const testFunc = async function() { counter += 1; return counter; };
    const memoizedFunc = memoize(testFunc);

    const funcCallOne = await memoizedFunc();
    const funcCallTwo = await memoizedFunc();

    expect(funcCallOne).to.equal(funcCallTwo);
    expect(counter).to.equal(1);
  });

  it('should memoize function result with cache keys', () => {
    let counter = 0;
    const testFunc = function() { counter += 1; return counter; };
    const memoizedFunc = memoize(testFunc);

    const funcCallOne = memoizedFunc('test');
    const funcCallTwo = memoizedFunc('test');

    expect(funcCallOne).to.equal(funcCallTwo);
    expect(counter).to.equal(1);
  });

  it('should give different results with different cache keys', () => {
    let counter = 0;
    const testFunc = function() { counter += 1; return counter; };
    const memoizedFunc = memoize(testFunc);

    const funcCallOne = memoizedFunc('test1');
    const funcCallTwo = memoizedFunc('test2');

    expect(funcCallOne).to.not.equal(funcCallTwo);
    expect(counter).to.equal(2);
  });

  it('should use the first argument as cache keys if no resolver was defined', () => {
    let counter = 0;
    const testFunc = function() { counter += 1; return counter; };
    const memoizedFunc = memoize(testFunc);

    const funcCallOne = memoizedFunc('test1');
    const funcCallTwo = memoizedFunc('test2', 'test1');

    expect(funcCallOne).to.not.equal(funcCallTwo);
    expect(counter).to.equal(2);
  });

  it('should use resolver to create cache key', () => {
    let counter = 0;
    const testFunc = function() { counter += 1; return counter; };
    const resolver = function(cacheKey) { return cacheKey.toUpperCase(); };
    const memoizedFunc = memoize(testFunc, resolver);

    const funcCallOne = memoizedFunc('test');
    const funcCallTwo = memoizedFunc('TEST');

    expect(funcCallOne).to.equal(funcCallTwo);
    expect(counter).to.equal(1);
  });

  it('should use async resolver to create cache key', async () => {
    let counter = 0;
    const testFunc = async function() { counter += 1; return counter; };
    const resolver = async function(cacheKey) { return cacheKey.toUpperCase(); };
    const memoizedFunc = memoize(testFunc, resolver);

    const funcCallOne = await memoizedFunc('test');
    const funcCallTwo = await memoizedFunc('TEST');

    expect(funcCallOne).to.equal(funcCallTwo);
    expect(counter).to.equal(1);
  });

});
