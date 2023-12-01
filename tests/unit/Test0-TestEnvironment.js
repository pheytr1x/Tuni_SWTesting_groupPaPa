/** Basic tests to ensure that the testing environment is set up correctly.
 * Generated by GitHub Copilot with prompt:
 * "Comprehensive tests for testing the environment itself"
 * 
 * NOTE:
 * this can be excluded from final test suite, by renaming file suffix to .txt
 * */
import chai from 'chai';
const { expect } = chai;


describe('Test 0. JS Environment Test Suite', () => {
  // Test for basic JavaScript functionality
  describe('JavaScript Functionality', () => {
    it('should handle basic arithmetic', () => {
      expect(2 + 2).to.equal(4);
      expect(2 * 2).to.equal(4);
      expect(2 - 2).to.equal(0);
      expect(2 / 2).to.equal(1);
    });

    it('should handle JavaScript types', () => {
      expect(typeof 'string').to.equal('string');
      expect(typeof 1).to.equal('number');
      expect(typeof {}).to.equal('object');
      expect(typeof []).to.equal('object');
      expect(typeof true).to.equal('boolean');
    });
  });

  // Test for Chai functionality
  describe('Chai Assertion Library', () => {
    it('should handle "equal" assertions', () => {
      expect(2).to.equal(2);
      expect('test').to.equal('test');
    });

    it('should handle "deep equal" assertions', () => {
      expect({ test: 1 }).to.deep.equal({ test: 1 });
      expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
    });

    it('should handle "truthy" and "falsy" assertions', () => {
      expect(true).to.be.true;
      expect(false).to.be.false;
      expect(1).to.be.ok;
      expect(0).to.not.be.ok;
    });
    
    it('should fail "2 == 1"', () => {
      expect(2).to.equal(1);
    });
  });
});