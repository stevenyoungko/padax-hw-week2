def maxZeros(nums):
	nums.insert(0, 1)
	nums.append(1)
	oneindex_lst = []
	for i in range(len(nums)):
		if nums[i] == 1:
			oneindex_lst.append(i)
	count = 0
	for i in range(len(oneindex_lst)-1):
		temp = oneindex_lst[i+1] - oneindex_lst[i] - 1
		if temp > count:
			count = temp
	return count


print(maxZeros([0,1,0,0]))
print(maxZeros([1,1,1,1,1]))
print(maxZeros([1,0,0,0,0,1,0,1,0,0]))