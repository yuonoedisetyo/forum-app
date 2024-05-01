import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveMyAccount } from '../states/account/action';


function MyAccount() {
    const myAccount = useSelector((states) => states.myAccount);
    console.log("myAccount =", JSON.stringify(myAccount))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveMyAccount());
    }, [dispatch]);

    useEffect(() => {
        console.log("myAccount ==", JSON.stringify(myAccount))
    }, [myAccount])



    // function onAddThread(text) {
    //   const id = `todo-${+new Date()}`; // generate id using timestamp
    //   dispatch(
    //     addThreadActionCreator({
    //       id,
    //       text
    //     })
    //   );
    // }

    // function onToggleThread(id) {
    //   dispatch(toggleThreadActionCreator(id));
    // }

    // function onDeleteThread(id) {
    //   dispatch(deleteThreadActionCreator(id));
    // }

    console.log("myAccount ", myAccount)

    //   const {name="",email="",avatar=""} = myAccount

    return (
        <>
            <div>
                <title>My Account</title>
                <label>{myAccount?.name}</label>
                <label>{myAccount?.email}</label>
                <label>{myAccount?.avatar}</label>
            </div>
        </>
    );
}

export default MyAccount;
