import { getOddNumbers } from './array-exercise-001';

describe('array tests', () => {
  it('test iteration 1', () => {
    // test
    const input = [-3, 2, 1, 4, -4];
    const output = [-3, 1];

    // assert
    const oddArr = getOddNumbers(input);
    expect(oddArr).toEqual(output);
  });

  it('test iteration 2', () => {
    // test
    const input = [0, 1, 2, 3, 2];
    const output = [1, 3];

    // assert
    const oddArr = getOddNumbers(input);
    expect(oddArr).toEqual(output);
  });

  it('test iteration 3', () => {
    // test
    const input = [null];
    const output = [];

    // assert
    const oddArr = getOddNumbers(input);
    expect(oddArr).toEqual(output);
  });

  it('test iteration 4', () => {
    // test
    const input = [null, -3, 4, 1];
    const output = [-3, 1];

    // assert
    const oddArr = getOddNumbers(input);
    expect(oddArr).toEqual(output);
  });

  it('test iteration 5', () => {
    // test
    const input = [parseInt('010'), -3, parseInt('9'), parseInt('011'), null, parseInt('') || 0];
    const output = [-3, 9, 11];

    // assert
    const oddArr = getOddNumbers(input);
    expect(oddArr).toEqual(output);
  });

  // feel free to create more test iterations for different use cases.
  // finding normal uses cases are easy, but there might be some edge cases ;).
});
