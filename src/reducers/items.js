//action types
const INIT_ITEMS =  'INIT_ITEMS'
const ADD_ITEMS =  'ADD_ITEMS'
const DELETE_ITEMS =  'DELETE_ITEMS'

//reducer
export default function (state, action){
    if(!state){
        state={items:[]}
    }
    switch(action.type){
        case INIT_ITEMS:
            return {
                items:action.items
            }
        case ADD_ITEMS:
            return {
                items:[...state.items,action.comment]
            }
        case DELETE_ITEMS:
            return{
                itemstodos:[
                    ...state.items.slice(0,action.index),
                    ...state.items.slice(action.index+1)
                ]
            }
        default:
            return state
    }
}

//action creators
export const initItems = (items) => {
    return {type:INIT_TODOS,items}
}

export const addItems = (item) => {
    return {type:ADD_TODOS,item}
}

export const deleteItems = (index) => {
    return {type:DELETE_TODOS,index}
}