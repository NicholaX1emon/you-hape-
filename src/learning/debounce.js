import { func } from "prop-types";

window.onload = () => {
  let component = document.querySelector('#xxx')

  const debounce = callback => {
    let timer = null;
    return function () { 
      clearTimeout(timer) //清除定时器 再重新触发
      const handler = () => {callback.call(this, arguments)}
      timer = setTimeout(handler, 1000)
    }
  }

  const throttle = callback => {
    let isCalled = false
    return function () {
      if(!isCalled) return //若被调用则退出函数
      isCalled = true //修改标志 防止执行定时器之前再次操作
      const handler = () => {callback.call(this, arguments)}
      setTimeout(handler, 1000)
      isCalled = false //完成操作 可以再次操作
    }
  }

  const handleClick = () => console.log('debounce') 

 

  component.addEventListener('click', debounce(handleClick))
}