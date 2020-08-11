# Given two arrays, create a function that let's a user to know(true/false)
# whether these two arrays contain any common items
# For example:

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'i']

# Should return false

array3 = ['a', 'b', 'c', 'x']
array4 = ['z', 'y', 'x']

# Should return true

# 2 paramaters - arrays - no size limit
# return true/false

# Brute force solution:

# Compare the values with nested loops
# O(n^2) - Time complexity
# O(1) - Space complexity

# Optimised solution:


def contains_common_item(arr1, arr2):
    # 1. loop through first array and create object where
    # properties == items in the array
    # Can we assume always 2 params?
    # This should be modularised
    map = dict()
    for i in range(len(arr1)):
        if not map.get(arr1[i]):
            item = arr1[i]
            map[item] = True
    # 2. loop through second array and check if item in second
    # array exists on created object.
    for j in range(len(arr2)):
        if arr2[j] in map:
            return True
    return False


    # O(a+b) - Time complexity
    # O(a) - Space complexity
print(contains_common_item(array3, array4))

# Readable solution:


def contains_common_item2(arr1, arr2):
    a_set = set(arr1)
    b_set = set(arr2)
    if (a_set & b_set):
        return True
    else:
        return False


print(contains_common_item2(array3, array4))
