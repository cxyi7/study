const ob = require('../answer/02');

test('第一次', () => {
  expect(ob.test1([])).toBe('这是[]');
});

test('第二次', () => {
  expect(ob.test1(['s'])).toBe('啥也不是');
});

test('第三次', () => {
  expect(ob.test1({})).toBe('这是{}');
});

test('第四次', () => {
  expect(ob.test1(null)).toBe('这是null');
});

test('第五次', () => {
  expect(ob.test1(undefined)).toBe('这是undefined');
});

test('第六次', () => {
  expect(ob.test1(NaN)).toBe('这是NaN');
});

test('第七次', () => {
  expect(ob.test1(null)).toBe('这是{}');
});

test('第八次', () => {
  expect(ob.test1('')).toBe(`这是''`);
});
