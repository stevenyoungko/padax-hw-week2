function twoSum(nums, target){
  let obj = {}
  let result = []
  nums.forEach((item, index) => {
    if (obj[target - item] >= 0) {
      result = [obj[target-item], index]
    } else {
      obj[item] = index
    }
  })
  return result
}
result = twoSum([2, 11, 7, 15], 9)
console.log(result)