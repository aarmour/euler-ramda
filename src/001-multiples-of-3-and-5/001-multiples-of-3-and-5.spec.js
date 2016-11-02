import { range } from 'ramda';

import solve from './001-multiples-of-3-and-5';

describe('Problem 1: Multiples of 3 and 5', function() {

  it('should return the correct answer', function() {
    expect(solve(range(1, 1000))).toEqual(233168);
  });
});
