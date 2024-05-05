import { getUsers, login, myAccount, register } from "../../data/network-data";
import { hideLoading, showLoading } from "../loading/action";

function asyncRegister(formData) {
    console.log("formData ", formData)
    return async (dispatch) => {
        dispatch(showLoading())
        const result = await register(formData);
        if (!result?.error) {
            console.log("account asyncRegister ", result?.account)
            dispatch(addAccountActionCreator(result?.account));
        }
        dispatch(hideLoading())
    };
}

function asyncLogin(formData) {
    console.log("formData ", formData)
    return async (dispatch) => {
        dispatch(showLoading())
        const result = await login(formData);
        console.log("result ", result)
        if (!result?.error) {
            console.log("account asyncLogin ", result?.token)
            dispatch(loginActionCreator({ token: result?.token }));
        }
        dispatch(hideLoading())
    };
}

function asyncReceiveUsers(UserId) {
    console.log("UserId ", UserId)
    return async (dispatch) => {
        dispatch(showLoading())
        const result = await getUsers(UserId);
        console.log("result ", result)
        if (!result?.error) {
            console.log("account asyncReceiveUsers ", result)
            dispatch(userActionCreator(result));
        }
        dispatch(hideLoading())
    };
}
function asyncReceiveMyAccount() {
    console.log("asyncReceiveMyAccount")
    return async (dispatch) => {
        dispatch(showLoading())
        const result = await myAccount();
        console.log("result ", result)
        if (!result?.error) {
            console.log("account asyncReceiveMyAccount ", result?.myAccount)
            dispatch(myAccountActionCreator(result?.myAccount));
        }
        dispatch(hideLoading())
    };
}

function addAccountActionCreator({ name, id, email, avatar }) {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            id,
            name,
            email,
            avatar
        }
    };
}
function loginActionCreator({ token }) {
    return {
        type: 'LOGIN',
        payload: {
            token
        }
    };
}
function userActionCreator(users) {
    return {
        type: 'RECEIVE_USERS',
        payload: {
            users
        }
    };
}

function myAccountActionCreator({ name, email, avatar, id }) {
    return {
        type: 'RECEIVE_MY_ACCOUNT',
        payload: {
            name,
            id,
            avatar,
            email
        }
    };
}

export {
    asyncRegister,
    addAccountActionCreator,
    asyncLogin,
    userActionCreator,
    asyncReceiveUsers,
    asyncReceiveMyAccount,
    myAccountActionCreator
}