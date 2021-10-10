import {USER_ACCOUNT} from '../types';

const initialstate = {
  userAccount: [
    {
      email: 'raji@gmail.com',
      password: '12345',
    },
  ],
};

type Action = {
  type: any;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case USER_ACCOUNT:
      return {
        userAccount: [...state.userAccount, action.payload],
      };
    default:
      return state;
  }
};
