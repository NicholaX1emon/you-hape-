const ADD_TODO = 'ADD_TODO'

const EDIT_TODO = 'EDIT_TODO'

const CHANGE_TODO = 'CHANGE_TODO'

const TOGGLE_TODO = 'TOGGLE_TODO'

const DELETE_TODO = 'DELETE_TODO'

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const addTodo = content => {
    return {
        type: ADD_TODO,
        content,
    }
}

const editTodo = index => {
    return {
        type: EDIT_TODO,
        index,
    }
}

const changeTodo = (content, index) => {
    return {
        type: CHANGE_TODO,
        content,
        index,
    }
}

const toggleTodo = index => {
    return {
        type: TOGGLE_TODO,
        index,
    }
}

const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index,
    }
}

const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
}

export { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, CHANGE_TODO,
         addTodo, editTodo, changeTodo, toggleTodo, deleteTodo, setVisibilityFilter }