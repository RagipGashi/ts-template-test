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
