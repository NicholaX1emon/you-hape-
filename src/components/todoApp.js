import React from 'react'
import { AddTodo, Footer } from './'
import { VisibleTodoList } from '../containers'

const TodoApp = () => {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    ) 
}

export default TodoApp