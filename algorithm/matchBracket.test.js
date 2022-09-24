const matchBracket = require('../answer/matchBracket')

test('正常情况',() => {
   const str = '1{3(45[6]7)8}8'
   expect(matchBracket(str)).toBeTruthy()
})

test('正常情况',() => {
    const str = '}2{23}123{1]123[231'
    expect(matchBracket(str)).toBeFalsy()
})

test('正常情况',() => {
    const str = 'd{s[2(3)32)4]5}6'
    expect(matchBracket(str)).toBeFalsy()
})

test('str为空',() => {
    const str = ''
    expect(matchBracket(str)).toBeFalsy()
})