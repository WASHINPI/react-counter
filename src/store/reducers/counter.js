import {
    INCREMENT,
    DECREMENT,
    ADD,
    SUBTRACT,
} from '../actionTypes';

import { updateObject } from './../utility';

const initialState = {
    counter: 0
}

const reducer =(state=initialState,action) => {

    switch (action.type) {

        case(INCREMENT):
            return updateObject(state,{counter: ++state.counter})
        case(DECREMENT):
            return updateObject(state,{counter: --state.counter})
        case(ADD):
            return updateObject(state,{counter: state.counter + 5})
        case(SUBTRACT):
            return updateObject(state,{counter: state.counter - 5})
    }

    return state;
}

export default reducer;
