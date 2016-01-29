require("must/register");
const _ = require('lodash');

describe('Easy', () => {
  it('#1', () => {
    const input     = [1, 5, 6, 9, 8, 6, 2];
    const expected  = [1, 5];
    const actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#2', () => {
    const input     = [1, 5, 6, 9, 8, 6, 2];
    const expected  = [8, 6, 2];
    const actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#3', () => {
    const input     = [1, 5, 6, 9, 8, 6, 2];
    const expected  = [5, 6, 9, 8, 6, 2];
    const actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#4', () => {
    const input     = [1, 5, 6, 9, 8, 6, 2];
    const expected  = [1, 5, 6, 9, 8, 6];
    const actual = _.identity(input);
    actual.must.eql(expected);
  });
});
