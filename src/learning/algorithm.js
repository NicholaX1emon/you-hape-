//冒泡排序
//相邻两元素依次比较大小按序替换位置 每一轮最大的数会排在最后
//重新开始一轮 除开已排好的上一轮最后一位 这样每一轮的次数都比上一轮少一次 
const bubbleSort = arr => {
    if(!arr || !arr.constructor === Array){
      return 
    }
    console.time('改进后冒泡排序耗时')
    let len = arr.length
    let temp
    for(let i = 0;i < len;i++){ //比较的轮数
      for(let j = 0;j < len - i - 1;j++){ //每一轮比较的次数
        if(arr[j] > arr[j+1]){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] =temp
        }
      }
    }
    console.timeEnd('改进后冒泡排序耗时')
    return arr
}

const sortedArr = bubbleSort([1,3,2,5,66,44,76,33])
console.log(sortedArr)

//选择排序
//从数组中选择出找一个最小的数 放在排序区的首位
//继续从剩余数组中找最小的数 依次放在排序区的后一位

const selectSort = arr => {
  if(!arr || !arr.constructor === Array){
    return 
  }
  console.time('选择排序耗时')
  let len = arr.length
  let temp
  let minIndex 
  for(let i = 0;i < len - 1;i++){ //用于重新排序的数组轮次 从第一位开始
    minIndex = i
    for(let j = i;j < len;j++){ //对于已经排序好的前i位不管 直接从i位后开始寻找剩余数组最小数
      if(arr[j] < arr[minIndex]){
        minIndex = j //记录一轮查找后最小数的索引
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('选择排序耗时')
  return arr
}

let a1 = selectSort([1,3,2,5,66,44,76,33])
console.log(a1)

//快速排序(二分排序？)
//从数组中选择一个数作为基数pivot 
//然后分区 比基数小的放左边区 比它大的分右边区 最后对分区分别同样递归排序
const quickSort = arr => {
  if(!arr || !arr.constructor === Array){
    return 
  }
  console.time('快速排序耗时')
  let len = arr.length
  if(len < 1){
    return arr
  }
  let pivotIndex = Math.floor(len / 2)
  let left = [] 
  let right = []
  let pivot = arr.splice(pivotIndex, 1)[0] //从原数组中移除基准数 该数不用进入循环
  for(let i = 0;i < len - 1;i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  console.timeEnd('快速排序耗时')
  return quickSort(left).concat([pivot], quickSort(right)) //将分区再分别排序后组成返回的数组
}

let a2 = quickSort([1,3,2,5,66,44,76,33])
console.log(a2)