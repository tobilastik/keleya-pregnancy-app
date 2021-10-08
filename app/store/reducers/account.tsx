import {USER_ACCOUNT} from '../types';

const initialstate = {
  userAccount: [],
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case USER_ACCOUNT:
      return {
        ...state,
        userAccount: action.payload,
      };
    default:
      return state;
  }
};
