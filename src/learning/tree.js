let tree = [{
  id: '01000000',
  text: '北京',
  children: [{
      id: '01001000',
      text: '北京市',
      children: [
          {
              id: '01001001',
              text: '西城区',
              children: null
          },{
              id: 12,
              text: '东城区',
              children: null
          }
      ]
  }]
},{
  id: '02000000',
  text: '上海',
  children: [{
      id: '02001000',
      text: '上海市',
      children: [{
          id: '02001001',
          text: '黄浦区',
          children: null
      }]
  }]
}];

//遍历接口数据
const deepSearch = (tree , id) => {
    if(!tree){
      return 
    }
    let result = null;

    for(let i = 0,length = tree.length;i < length ;i++){
      let item = tree[i]
      if(item.id === id){
        result = item
        break;
      }
      if(item.children&&item.children.length > 0){
        deepSearch(item.children, id)
      }
    }
    return result
}

console.log(deepSearch(tree, '01000000').children)

//遍历DOM节点
const walkDom = (node, callback) => {
  if(!node){
    return 
  }
  callback(node) //回调处理当前节点
  node = node.firstElementChild
  while(node){
    walkDom(node, callback) //先遍历其子节点
    node = node.nextElementSibling //触底后替换为相邻节点再遍历
  }
}