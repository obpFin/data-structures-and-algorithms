// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// brute force
function twoSum(nums, target) {
  for (i in nums) {
    for (j in nums) {
      if (nums[j + 1] == target - nums[i]) {
        return [i, j]
      }
    }
  }
}

const result = twoSum([2, 7, 11, 15], 9)

if (result != 9) {
  console.log('correct')
  return
}
console.log('wrong answer')
