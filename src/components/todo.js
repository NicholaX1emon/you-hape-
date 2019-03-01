import React from 'react'
import { Input, Button, Radio } from 'antd'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

const Todo = ({todo, onTodoChange, onRadioChange, onEditClick, onDeleteClick }) => {
    const handleTodoChange = e => {
        onTodoChange(e.target.value)//此处如何以其他方式获取todolist组件传递的index?
    }

    return (
        <div>
            {todo.isEditable&&!todo.isCompleted&&
                <Input value={todo.content} onChange={handleTodoChange} auto-focus/>}
            {todo.isEditable&&!todo.isCompleted&&
                <Button onClick={onEditClick}>确定</Button>}
            {!todo.isEditable&&
                <span>{todo.content}</span>}
            {todo.isCompleted
                    ?<RadioGroup defaultValue={true} buttonStyle="solid" onChange={onRadioChange}>
                        <RadioButton value={false}>待办</RadioButton>
                        <RadioButton value={true}>已完成</RadioButton>
                    </RadioGroup>
                    : <RadioGroup defaultValue={false} buttonStyle="solid" onChange={onRadioChange}>
                        <RadioButton value={false}>待办</RadioButton>
                        <RadioButton value={true}>已完成</RadioButton>
                    </RadioGroup>}
            <Button onClick={onEditClick} >编辑</Button>
            <Button onClick={onDeleteClick} >删除</Button>
        </div>
    )
}

export default Todo
