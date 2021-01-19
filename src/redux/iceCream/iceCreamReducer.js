import { BUY_ICECREAM } from './iceCreamTypes';
import { REPLENISH_STOCK } from '../misc/miscTypes';

const initialState = {
  numOfIceCreams: 15
}

const iceCreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    case REPLENISH_STOCK: return {
      ...state,
      numOfIceCreams: initialState.numOfIceCreams
    }
    default: return {
      ...state
    }
  }
}

export default iceCreamReducer;
