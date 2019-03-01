import ReactDOM, {React, Component} from 'react'

const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root') //DOM树中的两个兄弟节点

function Child(props) { //该组件的button不具有事件监听 不会被捕获 将会冒泡向上
    return (
        <div>
            <button>
                Click
            </button>
        </div>
    )
}

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.getElementById('modalRoot')
    }

    componentDidMount() {
        modalRoot.append(this.element); //该组件渲染完成后将其element挂在到其中一个DOM节点
    }

    componentWillUnmount() {
        modalRoot.remove(this.element);
    }

    render() {
        const {
            children 
        } = this.props;
        //此时并不是通常的将渲染的子元素装配到离其最近的父元素 
        //而是将其装配到this.element上  而this.element又挂载在modalRoot上
        return ReactDOM.createPortal( 
            children,
            this.element, 
          );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            clickCount: 0,
        };
        this.handleClick = () => {
            this.setState(preState => ({
                clickCount: preState.clickCount + 1,
            }))
        };
    }

    render() {
        return (
            // 此元素上具有事件监听 而该元素又被挂载到appRoot 
            <div onClick={this.handleClick}> 
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                Open up the browser DevTools
                to observe that the button
                is not a child of the div
                with the onClick handler.
                </p>
            {/* 此时Modal组件实际被挂载到了modalRoot节点 该组件底层元素的事件冒泡上来被Parent组件捕获 即被兄弟节点捕获    */}
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
} 

ReactDOM.render(<Parent />, appRoot); //将Parent组件挂载到appRoot节点 