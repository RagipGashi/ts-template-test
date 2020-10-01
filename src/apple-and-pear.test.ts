import { FruitsBasket, getFruitsWithForEach } from './apple-and-pear';

describe('Testing getFruits()', () => {
  it('getFruits(): return [[apple, apple], [pear, pear]]', () => {
    const basket1 = [FruitsBasket.Apple, FruitsBasket.Pear, FruitsBasket.Apple, FruitsBasket.Pear];
    const basket2 = [FruitsBasket.Apple, FruitsBasket.Pear, FruitsBasket.Apple, FruitsBasket.Pear];

    const result = [
      [FruitsBasket.Apple, FruitsBasket.Apple, FruitsBasket.Apple, FruitsBasket.Apple],
      [FruitsBasket.Pear, FruitsBasket.Pear, FruitsBasket.Pear, FruitsBasket.Pear],
    ];
    expect(getFruitsWithForEach(basket1, basket2)).toEqual(result);
  });
});
