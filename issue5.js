function maxZeros(nums){
  let newNums = [1, ...nums, 1]
  oneIndexList = []
  newNums.forEach((item, index) => {
    if (item === 1) {
      oneIndexList.push(index)
    }
  })
  let count = 0
  oneIndexList.forEach((item, index) => {
    let temp = oneIndexList[index + 1] - oneIndexList[index] - 1
    if (temp > count) {
      count = temp
    }
  })
  return count
}

console.log(maxZeros([0,1,0,0]))
console.log(maxZeros([1,1,1,1,1]))
console.log(maxZeros([1,0,0,0,0,1,0,1,0,0]))