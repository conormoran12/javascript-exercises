const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('hello there')).toEqual('ereht olleh')
    expect(reverseString('123! abc!')).toEqual('!cba !321')
    expect(reverseString('')).toEqual('')
  });
});
