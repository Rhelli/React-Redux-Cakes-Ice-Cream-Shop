import { BUY_ICECREAM } from './iceCreamTypes';
import { REPLENISH_ICECREAM } from './iceCreamTypes';

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

export const replenishIceCream = () => {
  return {
    type: REPLENISH_ICECREAM
  }
}
