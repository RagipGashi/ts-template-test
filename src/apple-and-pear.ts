/** Exercise: Sort a mixed array with pears and apples in two other arrays each of them to contain, one only apples, and the other only pears
 *
 * FruitBasket: enum, which contain Apple and Pear
 *
 * @param basket1, a parameter which is a mixed array with pears and apples
 * @param basket2, a parameter which is also a mixed array with pears and apples
 *
 * function getFruits(basket1: FruitBasket[], basket2: FruitBaske[]): Array<FruitBasket[]>
 *
 */

export enum FruitsBasket {
  'Apple',
  'Pear',
}

export function getFruitsWithForEach(basket1: FruitsBasket[], basket2: FruitsBasket[]): Array<FruitsBasket[]> {
  const apple = [];
  const pear = [];
  basket1.forEach((fruit) => {
    if (fruit === FruitsBasket.Apple) {
      apple.push(fruit);
    } else pear.push(fruit);
  });

  basket2.forEach((fruit) => {
    if (fruit === FruitsBasket.Pear) {
      pear.push(fruit);
    } else apple.push(fruit);
  });
  const result = [apple, pear];
  return result;
}

export function getFruitsWithFilter(basket1: FruitsBasket[], basket2: FruitsBasket[]): Array<FruitsBasket[]> {
  const fruits: FruitsBasket[][] = [basket1, basket2];

  const allFruits: FruitsBasket[] = fruits.flat();

  const apple = allFruits.filter((fruit) => fruit === FruitsBasket.Apple);
  const pear = allFruits.filter((fruit) => fruit === FruitsBasket.Pear);

  const result = [apple, pear];
  return result;
}
