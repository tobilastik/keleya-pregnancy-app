import {USER_ACCOUNT} from '../types';

const setUserAccount = (payload: {email: string; password: string}) => ({
  type: USER_ACCOUNT,
  payload,
});

export default {
  setUserAccount,
};
