import {USER_ACCOUNT} from '../types';

const setUserAccount = (payload: {}) => ({
  type: USER_ACCOUNT,
  payload,
});

export default {
  setUserAccount,
};
