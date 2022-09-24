const flatern = require('../answer/deepClone');

test('第一次', () => {
  expect(flatern({a:1,b:2})).toEqual({a:1,b:2});
});

test('第二次', () => {
  expect(flatern({a:1,b:2,c:{a:1,b:2}})).toEqual({a:1,b:2,c:{a:1,b:2}});
});

test('第三次', () => {
  expect(flatern({a:1,b:2,c:{a:1,b:2},d:[1,2,3]})).toEqual({a:1,b:2,c:{a:1,b:2},d:[1,2,3]});
});

test('第四次', () => {
  expect(flatern('ss')).toEqual('ss');
});