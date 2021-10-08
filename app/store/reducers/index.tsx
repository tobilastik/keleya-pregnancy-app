import {combineReducers} from 'redux';
import account from './account';

const appReducer = combineReducers({
  account,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
