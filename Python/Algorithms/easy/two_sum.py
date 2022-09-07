# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# brute force
# O(n^2) time | O(1) space

def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[j] == target - nums[i]:
                return [i, j]


result = twoSum([2, 7, 11, 15], 9)

if (result == [0, 1]):
    print('correct')
else:
    print('wrong answer')

# Optimised
# O(n) time | O(n) space


def twoSum(array, targetSum):
    nums = {}

    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [targetSum - num, num]
        else:
            nums[num] = True
    return []

# Leetcode style: indexes instead of sum


class Solution:
    def twoSum(self, nums, target):
        d = {}
        for i, v in enumerate(nums):
            if (target-v) in d.keys():
                return [i, d[target-v]]
            d[v] = i
