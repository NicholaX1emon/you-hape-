//只拷贝对象或数组最外一层的引用
const shallowCopy = source => {
  if(typeof source !== 'object' || source.constructor === Function){
    return 
}
  let clonedObj = source.constructor === Array?[]:{}
  for(let key in source){
    clonedObj[key] = source[key]
  }
  return clonedObj;
} 

//递归深层次拷贝对象或数组
const deepCopy = source => {
    if(typeof source !== 'object' || source.constructor === Function){
        return 
    }
    let clonedObj = source.constructor === Array?[]:{}
    if(JSON){
      clonedObj = JSON.parse(JSON.stringify(source))
    }
    // for(let key in source){
    //   clonedObj[key] = typeof key === 'object'?
    //                                deepCopy(source[key]):source[key]
    // }
    return clonedObj;
}

const data = {
  name: 'llw',
  friends: [
    {
      name: '???',
      age: 20,
    },
    {
      name: '!!!',
      age: 3,
    }
  ],
  pet: {
    name: 'orange',
    age: 6,
  }
}

const data2 = [1,2,{name: 'hah'},[3,4]]

// let shallowcopy = shallowCopy(data)
// let shallowcopy2 = shallowCopy(data2)
// shallowcopy2[2].name = 'ehhhhh'
// console.log('shallowcopy --->',shallowcopy)
// console.log('data2 modified --->',data2)

let deepcopy = deepCopy(data)
let deepcopy2 = deepCopy(data2)
deepcopy2[0] = 100;
console.log('data deepcopy --->',deepcopy)
console.log('data2 not modified --->',data2)
