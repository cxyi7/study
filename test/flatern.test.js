const flatern = require('../answer/flatern');

test('第一次', () => {
  expect(flatern([])).toEqual([]);
});

test('第二次', () => {
  expect(flatern([1,2,3,[1,2,3]])).toEqual([1,2,3,1,2,3]);
});

test('第三次', () => {
  expect(flatern([1,2,3,[1,2,3,[1,2,3]]])).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('第四次', () => {
  expect(flatern('sss')).toBeFalsy();
});