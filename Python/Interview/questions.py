# Given two arrays, create a function that let's a user to know (true#false)
# whether these two arrays contain any common items
# For example:

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'i']

# Should return false

array3 = ['a', 'b', 'c', 'x']
array4 = ['z', 'y', 'x']

# Should return true

# 2 paramaters - arrays - no size limit
# return true#false

# Brute force solution:
# Compare the values with nested loops - O(n^2)

# Optimised solution:
# array1 => obj {
#  a: true
#  b: true
#  c: true
#  x: true
# }
# array2[index] === obj.properties


def containsCommonItem(arr1, arr2):
  # 1. loop through first array and create object where
  # properties === items in the array

  # 2. loop through second array and check if item in second
  # array exists on created object.

  # - O(a+b)