import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo_actions'
import { Input, Button } from 'antd'

let AddTodo = ({dispatch}) => {
    let input = null 
    const handleAddClick = e => {
        // console.log('input value--->',input.value)
        // if (!input.value.trim()) {
        //     return
        //   }
        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <div>
            <Input placeholder='请输入待办事项' autoFocus ref={node => input = node}/>
            <Button onClick={handleAddClick}>新增</Button>
        </div>
    ) 
}

AddTodo = connect()(AddTodo) //注入dispatch

export default AddTodo