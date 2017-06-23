import { Stacks } from '../navigation/';
export const stackState = (state, action) => Stacks.router.getStateForAction(action, state);