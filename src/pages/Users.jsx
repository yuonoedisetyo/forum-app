import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList';
import { asyncReceiveUsers } from '../states/account/action';


function Users() {
    const users = useSelector((states) => states.users);
    console.log("users ", JSON.stringify(users))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveUsers());
    }, [dispatch]);



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

    console.log("users ", users)

    return (
        <UsersList users={users} />
    );
}

export default Users;
