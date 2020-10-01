import { FruitsBasket, getFruitsWithFilter, getFruitsWithForEach } from './apple-and-pear';

describe('Testing getFruits()', () => {
  it('getFruitsWithForEach(): return [[apple, apple], [pear, pear]]', () => {
    const basket1 = [FruitsBasket.Apple, FruitsBasket.Pear, FruitsBasket.Apple, FruitsBasket.Pear];
    const basket2 = [FruitsBasket.Apple, FruitsBasket.Pear, FruitsBasket.Apple, FruitsBasket.Pear];

    const result = [
      [FruitsBasket.Apple, FruitsBasket.Apple, FruitsBasket.Apple, FruitsBasket.Apple],
      [FruitsBasket.Pear, FruitsBasket.Pear, FruitsBasket.Pear, FruitsBasket.Pear],
    ];
    expect(getFruitsWithForEach(basket1, basket2)).toEqual(result);
  });

  it('Testing getFruitsWithFilter()', () => {
    const basket1 = [FruitsBasket.Apple, FruitsBasket.Pear, FruitsBasket.Apple, FruitsBasket.Pear];
    const basket2 = [];

    const result = [
      [FruitsBasket.Apple, FruitsBasket.Apple],
      [FruitsBasket.Pear, FruitsBasket.Pear],
    ];

    expect(getFruitsWithFilter(basket1, basket2)).toEqual(result);
  });
});
