import { BUY_CAKE, REPLENISH_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
    if (state.numOfCakes > 0) {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    } else {
      return {
        ...state,
        numOfCakes: 'Out Of Stock!'
      }
    }
    case REPLENISH_CAKE: return {
      ...state,
      numOfCakes: initialState.numOfCakes
    }
    default: return {
      ...state
    }
  }
}

export default cakeReducer;
