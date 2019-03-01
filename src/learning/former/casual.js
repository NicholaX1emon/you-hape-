import React, {Component} from 'react';
import {Button, Input} from 'antd';
import List from './list'
import _ from 'lodash'

import 'antd/dist/antd.css';
import '../css/casual.css'

 class Casual extends Component {
    
    constructor (props) { 
        super(props);
        this.state = {
         todos:[]
        }    
    }  
    
    removeItem (item) {
     const todos = this.getTodos();
     const itemIndex = todos.indexOf(item);
     this.state.todos.splice(itemIndex, 1)
     this.setState({
       todos,
     })
    }

    getTodos () {
      return this.state.todos
    }

    render () {
        const inputHandler = e => {
        const value = e.target.value;
        this.setState({
          input: value,
        })
      }
        const handleItemOnChange = (e, item) => {
          e.persist();
          const content = e.target.value
          const todos = this.state.todos //箭头函数this指向外部 render函数的this指向实例 所以传回调时不用重新绑
          const itemIndex = todos.indexOf(item)
          const newItem = {
            ...item,
            content,
            isEditable: true,
            isFinished: false,
          }
          todos.splice(itemIndex, 1, newItem) //替换当前下标处为newItem
          this.setState({
            todos:[
              ...todos
            ]
          })
        }
        const clickHandler = e => {
          const {todos,input}
          =this.state
          if (!input) {
            alert('待办事项不能为空')
            return;
          }
          todos.push({
            content: input,
            isEditable: false,
            isFinished: false,
          }); 
          this.setState({
            todos,
            input:''
          })
        }
      
        const {todos,input}
        =this.state 

        const handleTodoItemClick = item => {
          const todos = this.getTodos();
          const itemIndex = todos.indexOf(item)
          const newItem = {
            ...item,
            isEditable: !item.isEditable,
          }
          todos.splice(itemIndex, 1, newItem)
          this.setState({
            todos: [
              ...todos,
            ]
          })
        }  
        const handleRadioChange = item => {
          console.log('item ---->',item)
          const todos = this.getTodos();
          const itemIndex = todos.indexOf(item)
          const newItem = {
            ...item,
            isFinished: !item.isFinished,
          }
          todos.splice(itemIndex, 1, newItem)
          this.setState({
            todos: [
              ...todos,
            ]
          })
        }
        
        return (<div>
                <Input placeholder="please input your to do list" onChange={inputHandler} value={input}/>
                <List  todos={todos} onButtonClick={this.removeItem.bind(this)} onTodoClick={handleTodoItemClick} onInputChange={handleItemOnChange} onRadioChange={handleRadioChange}/>
                <Button type="primary" onClick={clickHandler} className='addButton'>新增</Button>
        </div>) 
    }

}

export default Casual