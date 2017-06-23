import { SET_NUMBER } from './../actions/actionNames';
import { INCREASE } from './../actions/actionNames';
import { DECREASE } from './../actions/actionNames';
import { RESET } from './../actions/actionNames';

const initialState = {
  number: 17,
  anotherValue: 'value from global state'
};

export const counterState = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        number: action.number
      }
    case INCREASE:
      return {
        ...state,
        number: ++state.number
      }
    case DECREASE:
      return {
        ...state,
        number: --state.number
      }
    case RESET:
      return {
        ...state,
        number: 0
      }
    default:
      return state
  }
};