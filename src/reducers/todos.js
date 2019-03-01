import { ADD_TODO, EDIT_TODO, CHANGE_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todo_actions'

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
        return [
            ...state,
            {
                content: action.content,
                isCompleted: false,
                isEditable: false,
            }
        ]
        case CHANGE_TODO:
        return state.map((todo, index) => {
            if(action.index === index){
                return {
                    ...todo,
                    content: action.content,
                }
            }
            return todo;
        })
        case EDIT_TODO:
        return state.map((todo, index) => {
            if(action.index === index){
                return {
                    ...todo,
                    isEditable:!todo.isEditable,
                }
            }
            return todo;
        })
        case TOGGLE_TODO:
        return state.map((todo, index) => {
            if(action.index === index){
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo;
        })
        case DELETE_TODO:
        state.splice(action.index,1)
        return [
            ...state,
        ]
        default:
        return state;
    }
}

export default todos

