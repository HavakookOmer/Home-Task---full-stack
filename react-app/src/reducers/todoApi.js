import { ACTION_TYPES } from "../actions/todoApi";
const initialState = {
    list: []
}


export const todoApi = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ID:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
            
        default:
            return state
    }
}