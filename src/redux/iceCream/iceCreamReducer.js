import { BUY_ICECREAM, REPLENISH_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 15
}

const iceCreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM:
      if (state.numOfIceCreams > 0) {
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1
        }
      } else {
        return {
          ...state,
          numOfIceCreams: 'Out Of Stock!'
        }
      }
    case REPLENISH_ICECREAM: return {
      ...state,
      numOfIceCreams: initialState.numOfIceCreams
    }
    default: return {
      ...state
    }
  }
}

export default iceCreamReducer;
