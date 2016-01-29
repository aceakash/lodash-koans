# lodash-koans
Koans to get more familiar with [lodash](https://lodash.com)

# Usage
```
npm install
npm start
```

This will give you failing tests. Fire up your JS editor/IDE of choice, and in each test in **lodash.test.js**, replace identity in `_.identity(input)` with the lodash function that would do the transform in the test. Of course, you might need to pass in additional parameters to the function.

e.g.

You have a failing test that looks like this:

```
it('#1', () => {
    const input     = [1, 5, 6, 9, 8, 6, 2];
    const expected  = [1, 5];
    const actual = _.identity(input);
    actual.must.eql(expected);
});
```

After having cleverly identified that this requires [take](https://lodash.com/docs#take), just change the one line to:

```
const actual = _.take(input, 2);
```

Run `npm start` again, and this test should have passed.
