import { DELETE_RESULT, STORE_RESULT } from '../actionTypes';

const initialState = {
    result: []
}

const reducer =(state=initialState,action) => {

    switch (action.type) {

        case(STORE_RESULT):
            return {
                ...state,
                result: state.result.concat(action.payload)
            }
        case(DELETE_RESULT):
            return {
                ...state,
                result: state.result.filter((key,index) => index !== action.payload)
            }
    }

    return state;
}

export default reducer;
