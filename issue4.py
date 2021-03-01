def twoSum(nums, target):
	for i in range(len(nums)-1):
		for j in range(len(nums)-i):
			temp = nums[i] + nums[i+j]
			if (temp == target):
				return [i, i+j]


result = twoSum([2, 11, 7, 15], 9)
print(result)