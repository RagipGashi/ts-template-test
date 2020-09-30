import { getOddNumbers } from './array-exercise-001';

describe('array tests', () => {
  it('test iteration 1', () => {
    // test
    const input = [-3, 2, 1, 4, -4];
    const output = getOddNumbers(input);

    // assert
    const expectedResult = [-3, 1];
    expect(output).toEqual(expectedResult);
  });

  it('test iteration 2', () => {
    // test
    const input = [0, 1, 2, 3, 2];
    const output = getOddNumbers(input);

    // assert
    const expectedResult = [1, 3];
    expect(output).toEqual(expectedResult);
  });

  // feel free to create more test iterations for different use cases.
  // finding normal uses cases are easy, but there might be some edge cases ;).
});
