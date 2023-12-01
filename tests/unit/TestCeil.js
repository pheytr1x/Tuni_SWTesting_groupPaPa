import chai from 'chai';
import ceil from '../../src/ceil.js'; // FUT SUT DUT Source file
const { expect } = chai;

// Tests

describe('src/ceil.js function', () => {
  it('should round up 4.006 to 5', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('should round up 6.004 to 6.01 with precision 2', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('should round up 6040 to 6100 with precision -2', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });
});