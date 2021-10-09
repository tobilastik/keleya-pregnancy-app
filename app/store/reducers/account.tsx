import {USER_ACCOUNT} from '../types';

interface AccountStateArray {
  userAccount: any;
}

const initialstate = {
  userAccount: [],
} as AccountStateArray;

type Action = {
  type: any;
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
