import * as CONST_TODO from "./constants"

export const setTodo = payload => {
    return {
        type: CONST_TODO.SET_TODO,
        payload
    }
}
export const addTodo = payload => {
    return {
        type: CONST_TODO.ADD_TODO,
        payload
    }
}
export const deleteTodo = payload => {
    return {
        type: CONST_TODO.DELETE_TODO,
        payload
    }
}
export const toggleTodo = payload => {
    return {
        type: CONST_TODO.TOOGLE_TODO,
        payload
    }
}
export const toggleAllTodo = payload => {
    return {
        type: CONST_TODO.TOOGLEALL_TODO,
        payload
    }
}
export const startEdit = payload => {
    return {
        type: CONST_TODO.START_EDIT,
        payload
    }
}
export const endEdit = payload => {
    return {
        type: CONST_TODO.END_EDIT,
        payload
    }
}
export const stopEdit = () => {
    return {
        type: CONST_TODO.STOP_EDIT
    }
}
export const switchFilter = payload => {
    return {
        type: CONST_TODO.SWITCH_FILTER,
        payload
    }
}
export const clearCompleted = () => {
    return {
        type: CONST_TODO.CLEAR_COMPLETED
    }
}