/******************************************************************************/
/* IMPORTANT: Replace *only* the bits that say _.identity(input) in the tests */
/******************************************************************************/

require("must/register");
var _ = require('lodash');

describe('Easy', function () {
  it('#1', () => {
    var input     = [1, 5, 6, 9, 8, 6, 2];
    var expected  = [1, 5];
    var actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#2', function () {
    var input     = [1, 5, 6, 9, 8, 6, 2];
    var expected  = [8, 6, 2];
    var actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#3', function () {
    var input     = [1, 5, 6, 9, 8, 6, 2];
    var expected  = [5, 6, 9, 8, 6, 2];
    var actual = _.identity(input);
    actual.must.eql(expected);
  });

  it('#4', function () {
    var input     = [1, 5, 6, 9, 8, 6, 2];
    var expected  = [1, 5, 6, 9, 8, 6];
    var actual = _.identity(input);
    actual.must.eql(expected);
  });
});
