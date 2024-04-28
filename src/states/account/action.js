import { register } from "../../data/network-data";

function asyncRegister(formData) {
    console.log("formData ",formData)
    return async (dispatch) => {
      const result = await register(formData);
      if(!result?.error){
          console.log("account asyncRegister ",result?.account)
          dispatch(addAccountActionCreator(result?.account));
      }
    };
  }

  function addAccountActionCreator({name,id}) {
    return {
      type: 'ADD_ACCOUNT',
      payload: {
        id,
        name,
      }
    };
  }

  export {
    asyncRegister,
    addAccountActionCreator
  }