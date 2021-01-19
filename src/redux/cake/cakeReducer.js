import { BUY_CAKE } from './cakeTypes';
import { REPLENISH_STOCK } from '../misc/miscTypes';

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case REPLENISH_STOCK: return {
      ...state,
      numOfCakes: initialState.numOfCakes
    }
    default: return {
      ...state
    }
  }
}

export default cakeReducer;
