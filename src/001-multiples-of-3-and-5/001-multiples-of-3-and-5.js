import { compose, filter, sum } from 'ramda';

const isMultipleOf3or5 = n => n % 3 === 0 || n % 5 === 0;

export default compose(sum, filter(isMultipleOf3or5));
