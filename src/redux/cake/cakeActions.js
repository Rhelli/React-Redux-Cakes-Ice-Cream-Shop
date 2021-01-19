import { BUY_CAKE, REPLENISH_CAKE } from './cakeTypes';

export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

export const replenishCake = () => {
  return {
    type: REPLENISH_CAKE
  }
}
