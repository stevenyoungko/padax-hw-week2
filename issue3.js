function maxProduct(nums){
	let max = 0
	for(let i = 0; i < nums.length - 1; i++) {
		for (let j = 0; j < nums.length-i-1; j++ ) {
			temp = nums[i] * nums[i+j+1]
			if (temp > max) {
				max = temp
			}
		}
	}
	return max
}


console.log(maxProduct([5, 20, 2, 6]))
console.log(maxProduct([10, -20, 0, 3]))