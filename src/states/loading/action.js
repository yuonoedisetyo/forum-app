import { useDispatch } from "react-redux";

function loadingActionCreator( loading =false) {
    return {
        type: 'LOADING',
        payload: {
            loading
        }
    };
}

function showLoading(){
    return async (dispatch) => {
        dispatch(loadingActionCreator(true))
      };
}
function hideLoading(){
    return async (dispatch) => {
        dispatch(loadingActionCreator(false))
      };
}

export {
    loadingActionCreator,
    showLoading,
    hideLoading
}
