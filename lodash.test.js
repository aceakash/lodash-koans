/***********************************************************/
/*   IMPORTANT: Replace *only* the specified bits          */
/***********************************************************/

require("must/register");
var _ = require('lodash');

describe('Easy - needs a single lodash function, with optional scalar arguments', function () {
  it('#1', function () {
    var input = ['prague', 'london', 'rome', 'berlin', 'paris'];
    var expected = ['rome', 'berlin', 'paris'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#2', function () {
    var input1 = ['batman', 'superman', 'green lantern'];
    var input2 = ['the flash', 'wonder woman'];
    var expected = ['batman', 'superman', 'green lantern', 'the flash', 'wonder woman'];
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#3', function () {
    var input1 = [5, 6, 4, 9, 0, 5, 6, 4, 9, 0];
    var input2 = 0;
    var expected = 4;
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#4', function () {
    var input = ['.', '.', '.', '.', '.', '.', 'surprise!'];
    var expected = 'surprise!';
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#5', function () {
    var input = ['nose', 'cheeks', 'lips', 'forehead', 'chin'];
    var expected = ['nose', 'cheeks', 'lips'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#6', function () {
    var input = [['firstName', 'Clark'], ['id', 3], ['lastName', 'Kent']];
    var expected = {firstName: 'Clark', id: 3, lastName: 'Kent'};
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#7', function () {
    var input1 = [{id: 1, name: 'alice'}, {id: 2, name: 'bob'}, {id: 3, name: 'charles'}];
    var input2 = [{id: 2}, {id: 4}, {id: 8}];
    var expected = [{id: 1, name: 'alice'}, {id: 3, name: 'charles'}];
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#8', function () {
    var input = [1, 5, 6, 9, 8, 6, 2];
    var expected = [[1, 5], [6, 9], [8, 6], [2]];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#9', function () {
    var input = [3, 4, 5, 6, 7, 8, 9];
    var expected = [3, 4, '-', '-', '-', 8, 9];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#10', function () {
    var input = [4, 5, 7, 8];
    var expected = 4;
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#11', function () {
    var input = [6, [4, 5], 3, 8, [2, 1, [0, 7]]];
    var expected = [6, 4, 5, 3, 8, 2, 1, 0, 7];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#12', function () {
    var input = ['apples', 0, [1, 2], true, '', 2, null, {a: 11}, 5.6, false];
    var expected = ['apples', [1, 2], true, 2, {a: 11}, 5.6];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#13', function () {
    var input = ['tra', 'la', 'la'];
    var expected = 'tra-la-la';
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#14', function () {
    var input1 = ['anchovies', 'cheese', 'pepperoni', 'chilli oil'];
    var input2 = ['mushrooms', 'chilli oil', 'sweetcorn', 'cheese', 'peppers'];
    var input3 = ['cheese', 'spicy beef', 'pepperoni', 'chilli oil'];
    var expected = ['cheese', 'chilli oil'];
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#15', function () {
    var input = [6, [4, 5], 3, 8, [2, 1, [0, 7]]];
    var expected = [6, 4, 5, 3, 8, 2, 1, [0, 7]];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#16', function () {
    var input1 = ['bob', 'alice', 'edith', 'gordon'];
    var input2 = ['tom', 'bob', 'nemo', 'alice'];
    var expected = ['edith', 'gordon'];
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#17', function () {
    var input = ['Robert', 'Downey', 'Jr'];
    var expected = ['Robert', 'Downey'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#18', function () {
    var input1 = [1, 5, 7, 9, 5, 8, 3];
    var input2 = 5;
    var expected = 4;
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#19', function () {
    var input = ['jackson', 'twain', 'bieber'];
    var expected = ['bieber', 'twain', 'jackson'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#20', function () {
    var input1 = [1, 3, 5, 7, 9, 11];
    var input2 = 8; // where would this fit in the ordered array above?
    var expected = 4;
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#21', function () {
    var input = ['Mr', 'Samuel', 'L', 'Jackson'];
    var expected = ['Samuel', 'L', 'Jackson'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });
});


