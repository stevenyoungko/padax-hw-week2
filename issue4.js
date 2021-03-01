function twoSum(nums, target){
  for(let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length-i-1; j++ ) {
      temp = nums[i] + nums[i+j]
      if (temp ===  target) {
        return [i, i+j]
      }
    }
  }
}
result=twoSum([2, 11, 7, 15], 9)
console.log(result)