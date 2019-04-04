const publishier = {
  listeners: {},

  on(type, callback){ //发布
    if(!callback){
      return 
    }
    if(!this.listeners[type]){
      this.listeners[type] = []
    }
    this.listeners[type].push(callback)
    console.log('listeners --->', this.listeners[type])
    return () => {
      this.remove(type, callback) //返回一个注销事件的函数引用
    }
  },
  emit(type, ...args){
    let listeners = this.listeners[type]
    if(Array.isArray(listeners)&&listeners.length > 0){
      for(let i = 0; i < listeners.length; i++){
        let callback = listeners[i]
        if(typeof callback === 'function'){
          callback(...args)
        }
      }
    }
  },
  remove(type, callback){
    if(!callback){
      return 
    }
    let listeners = this.listeners[type]
    if(listeners){
      for(let i = 0; i < listeners.length; i++){
        if(listeners[i] === callback){
          listeners.splice(i, 1)
        }
      }
    }
    console.log('listeners --->', listeners)
  }
}

const  unregister = publishier.on('message', msg => console.log('message --->',msg))
publishier.emit('message','haha')
unregister()
publishier.emit('message','hoho')

