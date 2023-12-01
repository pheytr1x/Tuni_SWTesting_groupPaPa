import chai from 'chai';
const { expect } = chai;


// INITIAL TESTS
describe('Initial Pass/Fail Test 1', () => {
  it('should pass because true is true', () => {
    expect(true).to.equal(true);
  });

  it('should fail because 2 != 1', () => {
    expect(2).to.equal(1);
  });
});
