import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { editTodo, changeTodo, toggleTodo, deleteTodo } from '../actions/todo_actions'

const getVisibleTodoList = (todos, filter) => {
    switch(filter){
        case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.isCompleted)
        case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.isCompleted)
        case 'SHOW_ALL':
        default:
        return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodoList(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        onRadioChange: index =>{
            dispatch(toggleTodo(index))
        },
        onEditClick: index => {
            dispatch(editTodo(index))
        },
        onTodoChange: (content, index) => {
            dispatch(changeTodo(content, index))
        },
        onDeleteClick: index => {
            dispatch(deleteTodo(index))
        },
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList