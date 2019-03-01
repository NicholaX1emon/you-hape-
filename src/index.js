import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// import Casual from './components/casual'
// import Concept from './components/concept'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoRoot from './reducers/todoRoot'
import { TodoApp } from './components'


// const  PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];
  

let store = createStore(todoRoot,applyMiddleware(
                            thunk,
                            logger
                        ))

ReactDOM.render(<Provider store={store}>
                    <TodoApp/>
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();