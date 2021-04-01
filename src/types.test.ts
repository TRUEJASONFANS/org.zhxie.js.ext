import {isOfType} from './types';

let a = true;
test('adds 1 + 2 to equal 3', () => {
    expect(isOfType.boolean(a)).toBe(true);
  });