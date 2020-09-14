import {DELETE_RESULT, STORE_RESULT} from "../actionTypes";


export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: STORE_RESULT,
                payload: counter
            })
        },2000)
    }
}

export const deleteResult = key => dispatch => {
    setTimeout(()=>{
        dispatch({
            type: DELETE_RESULT,
            payload:key
        })
    },2000)
}
