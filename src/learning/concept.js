import React, {Component} from 'react'
import {Input, Button, Checkbox} from 'antd'

function SearchInput(props) {
    const {
        handleOnChange,
        inputValue,
    } = props;

    return (
        <Input onChange={handleOnChange} value={inputValue} placeholder="Search..."/> //搜索框组件
    )
}

// function SubmitButton(props) {
//     const {
//         handleOnClick 
//     } = props;

//     return (
//         <Button onClick={handleOnClick}>Search</Button> //搜索按钮
//     )
// }

function ShowStock(props) {
    const {
        handleCheckClick
    } = props;

    return (
        <Checkbox onClick={handleCheckClick}>Only show products in stock</Checkbox> //复选框组件
    )
}

function ProductList(props) {
    const {
        inputValue,
        inStockOnly,
        products,
    } = props;

    let lastCategory = null;
    const rows = [];

    products.forEach(product => {
        if (product.name.indexOf(inputValue) === -1 || (!product.stocked && inStockOnly)) {
            return;
          }
        if (product.category !== lastCategory){
             rows.push(<ProductCategoryRow  product={product} key={product.category}/>)
        }
        rows.push(<ProductItemRow product={product} key={product.name}/>)
        lastCategory = product.category;
    })  

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

function ProductCategoryRow(props) {
    const {
        product
    } = props;

    return (
        <tr>
            <th colSpan="2">{product.category}</th>
        </tr>
    )
}

function ProductItemRow(props) {
    const {
        product
    } = props;

    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {props.product.name}
      </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            inStockOnly:false,
        }
    }

    componentDidUpdate() {
        console.log('inputValue --->',this.state.inputValue)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.inputValue !== nextState.inputValue){
            return true;
        }
        return false;
    }

    render() {
        const {
            products
        } = this.props;

        const {
            inputValue,
            inStockOnly,
        } = this.state;

        const handleOnChange = event => {
            this.setState({
                inputValue: event.target.value,
            })
        }

        const handleCheckClick = event => {
            this.setState({
                inStockOnly:!inStockOnly,
            })
        }

        // const handleOnClick = _ =>{
        //     //......搜索按钮 点击事件监听进行fetch调接口
        //     this.setState({
        //         
        //     })
        // }

        return (
            <div>
                <SearchInput inputValue={inputValue} handleOnChange={handleOnChange}/>
                <ShowStock handleCheckClick={handleCheckClick}/>
                {/* <SubmitButton handleOnClick={handleOnClick}/> */}
                <ProductList products={products} inStockOnly={inStockOnly} inputValue={inputValue}/>
            </div>
        ) 
    }
}


