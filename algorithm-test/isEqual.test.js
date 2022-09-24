const isEqual = require('../answer/isEqual');

test('第一次', () => {
  expect(isEqual([])).toBe('这是[]');
});

test('第二次', () => {
  expect(isEqual(['s'])).toBe('啥也不是');
});

test('第三次', () => {
  expect(isEqual({})).toBe('这是{}');
});

test('第四次', () => {
  expect(isEqual(null)).toBe('这是null');
});

test('第五次', () => {
  expect(isEqual(undefined)).toBe('这是undefined');
});

test('第六次', () => {
  expect(isEqual(NaN)).toBe('这是NaN');
});

test('第七次', () => {
  expect(isEqual(null)).toBe('这是null');
});

test('第八次', () => {
  expect(isEqual('')).toBe(`这是''`);
});
