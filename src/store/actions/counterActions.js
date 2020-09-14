import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "../actionTypes";

export const increment = () =>({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const add = () => ({
    type: ADD
})

export const subtract = () =>({
    type: SUBTRACT
})
