def maxProduct(nums):
	max = nums[0] * nums[1]
	for i in range(len(nums)-1):
		for j in range(len(nums)-i-1):
			temp = nums[i] * nums[i+j+1]
			if (temp > max):
				max = temp

	return max

print(maxProduct([10, -20, 0, 3]))
print(maxProduct([5, 20, 2, 6]))
print(maxProduct([1, -10]))