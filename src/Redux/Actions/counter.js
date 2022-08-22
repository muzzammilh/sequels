import { ActionType } from "../Contants/action-type"



export const increment = () => (dispatch)=>{
    dispatch({
        type: ActionType.INCREMENT
    })
}

export const decrement = () => (dispatch)=>{
    dispatch({
        type: ActionType.DECREMENT
    })
}