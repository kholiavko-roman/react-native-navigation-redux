import { combineReducers } from 'redux';
import { counterState } from './counter';
import { stackState } from './navigation';

export default combineReducers({
  counterState,
  stackState
});