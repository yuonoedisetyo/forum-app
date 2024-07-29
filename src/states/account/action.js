import API from '../../data/network-data';
import { hideLoading, showLoading } from '../loading/action';

function addAccountActionCreator({
  name, id, email, avatar,
}) {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      id,
      name,
      email,
      avatar,
    },
  };
}
function loginActionCreator({ token }) {
  return {
    type: 'LOGIN',
    payload: {
      token,
    },
  };
}
function userActionCreator(users) {
  return {
    type: 'RECEIVE_USERS',
    payload: {
      users,
    },
  };
}

function myAccountActionCreator({
  name, email, avatar, id,
}) {
  return {
    type: 'RECEIVE_MY_ACCOUNT',
    payload: {
      name,
      id,
      avatar,
      email,
    },
  };
}

function asyncRegister(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const result = await API.register(formData);
    if (!result?.error) {
      dispatch(addAccountActionCreator(result?.account));
    }
    dispatch(hideLoading());
  };
}

function asyncLogin(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const result = await API.login(formData);
    if (!result?.error) {
      dispatch(loginActionCreator({ token: result?.token }));
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveUsers(UserId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const result = API.getUsersFromStorage() || await API.getUsers(UserId);
    if (!result?.error) {
      dispatch(userActionCreator(result));
    }
    dispatch(hideLoading());
  };
}
function asyncReceiveMyAccount() {
  return async (dispatch) => {
    dispatch(showLoading());
    const result = await API.myAccount();

    if (!result?.error) {
      dispatch(myAccountActionCreator(result?.myAccount));
    }
    dispatch(hideLoading());
  };
}

export {
  asyncRegister,
  addAccountActionCreator,
  asyncLogin,
  userActionCreator,
  asyncReceiveUsers,
  asyncReceiveMyAccount,
  myAccountActionCreator,
  loginActionCreator,
};
