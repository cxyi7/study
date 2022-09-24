const isEqual = require('../answer/isTwoEqual')

test('第一次', () => {
  const obj1 = 'ss'
  const obj2 =  'ss'
  expect(isEqual(obj1,obj2)).toBeTruthy();
});

test('第二次', () => {
  const obj1 = 'ss'
  const obj2 =  ['ss']
  expect(isEqual(obj1,obj2)).toBeFalsy();
});

test('第三次', () => {
  const obj1 = ['ss']
  const obj2 =  ['ss']
  expect(isEqual(obj1,obj2)).toBeTruthy();
});

test('第四次', () => {
  const obj1 = {a: undefined}
  const obj2 = {b: undefined}
  expect(isEqual(obj1,obj2)).toBeFalsy();
});

test('第五次', () => {
  const obj1 = {a: undefined, b:'ss'}
  const obj2 = {a: undefined, b:'ss'}
  expect(isEqual(obj1,obj2)).toBeTruthy();
});

test('第六次', () => {
  const obj1 = {a: undefined, b:'ss',c: 'ss'}
  const obj2 = {a: undefined, b:'ss'}
  expect(isEqual(obj1,obj2)).toBeFalsy();
});

test('第七次', () => {
  const obj1 = {a: undefined, b:'ss', c: 'ss', d: {a: '1'}}
  const obj2 = {a: undefined, b:'ss', c: 'ss', d: {a: '1'}}
  expect(isEqual(obj1,obj2)).toBeTruthy();
});

test('第八次', () => {
  const obj1 = {a: undefined, b:'ss', c: 'ss', d: {a: '1', b: 'ss'}}
  const obj2 = {a: undefined, b:'ss', c: 'ss', d: {a: '1'}}
  expect(isEqual(obj1,obj2)).toBeFalsy();
});

test('第九次', () => {
	const a = [1, 2, 3]
	const b = {0: 1, 1: 2, 2:3}
  expect(isEqual(a,b)).toBeFalsy();
});