import { SET_NUMBER } from './actionNames';
import { INCREASE } from './actionNames';
import { DECREASE } from './actionNames';
import { RESET } from './actionNames';

export function setNumber(number) {
  return {
    type: SET_NUMBER,
    number: parseInt(number)
  }
}

export function increase() {
  return {
    type: INCREASE
  }
}

export function decrease() {
  return {
    type: DECREASE
  }
}

export function reset() {
  return {
    type: RESET
  }
}