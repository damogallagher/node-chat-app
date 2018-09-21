var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    var str = 123;

    var result = isRealString(str);

    expect(result).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var str = '    ';

    var result = isRealString(str);

    expect(result).toBeFalsy();
  });

  it('should allow string with non space characters', () => {
    var str = 'test';

    var result = isRealString(str);

    expect(result).toBeTruthy();
  });
  it('should allow string with non space characters and a space', () => {
    var str = 'test er';

    var result = isRealString(str);

    expect(result).toBeTruthy();
  });  
});

