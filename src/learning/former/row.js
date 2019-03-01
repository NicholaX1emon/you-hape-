import React, { Component } from 'react'
import {Input} from '@material-ui/core'
import {Button, Radio} from 'antd'
import _ from 'lodash'
import {} from 'react-debounce-input'

import '../css/row.css'

export default class Row extends Component {
    static defaultProps = {
        name: 'bob'
    }
    constructor(props) {
        super(props)
        this.fn = _.throttle(this.props.onInputChange, 2500)
    }

    render() {

    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
    
    const {
        todo, onButtonClick, onTodoClick, onInputChange, onRadioChange
        } = this.props;
    
    let clickCount = 0

    const handleOnClick = e => {
        onButtonClick(todo)
    }

    const handleTodoClick = e => {
        console.log('todo --->', todo)
        onTodoClick(todo)
    }

    const handleDoubleClick = e => {
        ++clickCount
        if (clickCount >= 2) {
            handleTodoClick()
            clickCount = 0
        }
    }

    const handleRadioChange = e => {
        console.log('todo ------->',todo)
        onRadioChange(todo);
    }

    return (
    <div onClick={handleDoubleClick}>
        {todo.isEditable 
        ? <Input value={todo.content} onClick={handleTodoClick} onChange={onInputChange} autoFocus className='input'></Input> 
        : <p className='input'>{todo.content}</p>}
        {todo.isFinished 
        ? <RadioGroup defaultValue={todo.isFinished} buttonStyle="solid">
            <RadioButton value={false} disabled>待办</RadioButton>
            <RadioButton value={true} >已完成</RadioButton>
        </RadioGroup>
        : <RadioGroup onChange={handleRadioChange} defaultValue={todo.isFinished} buttonStyle="solid">
            <RadioButton value={false}>待办</RadioButton>
            <RadioButton value={true}>已完成</RadioButton>
        </RadioGroup>}
        <Button onClick={handleOnClick} className="delete">删除</Button>
    </div>
        )
    }
}