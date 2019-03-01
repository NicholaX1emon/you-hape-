import React from 'react'

import Row from './row'

export default ({todos, onButtonClick, onTodoClick, onInputChange, onRadioChange}) => {
    
    return (<div>
        {  
            todos.map(todo => {
               return  <Row todo={todo} onButtonClick={onButtonClick} onTodoClick={onTodoClick}  onInputChange={onInputChange} onRadioChange={onRadioChange}/>
            })
        }
       
    </div>);
}

