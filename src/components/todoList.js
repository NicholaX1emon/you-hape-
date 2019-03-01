import React from 'react'
import Todo from './todo'

const TodoList = ({todos, onTodoChange, onRadioChange, onEditClick, onDeleteClick}) => {
    // const handleTodoChange = index => onTodoChange(index)
    // const handleRadioChange = index => onRadioChange(index)
    // const handleEditClick = index => onEditClick(index)
    // const handleDeleteClick = index => onDeleteClick(index)

    return (
        <div>
            {
                todos.map((todo, index)=> { //将todo在数组中的下标传递过去 根据todo在state数组中的下标对应各自的操作
                    return <Todo todo={todo} onTodoChange={content => onTodoChange(content, index)} onRadioChange={() => onRadioChange(index)} 
                                 onEditClick={() => onEditClick(index)} onDeleteClick={() => onDeleteClick(index)} />
                })
            }
        </div>
    )
}

export default TodoList