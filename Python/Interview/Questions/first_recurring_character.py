# Google Question
# Given an array = [2,5,1,2,3,5,1,2,4]:
# It should return 2

# Given an array = [2,1,1,2,3,5,1,2,4]:
# It should return 1

# Given an array = [2,3,4,5]:
# It should return undefined

arr = [2, 5, 1, 9, 3, 15, 11, 33, 1]

# Naive solution - O(n^2)


def firstRecurringChar(arr):
  # Check input
    for i in range(len(arr)):
        for j in range(len(arr[1:])):
            if arr[i] == arr[j]:
                return arr[i]
    return None


# Optimised solution - O(n)
def firstRecurringChar2(arr):
  # Check input

    map = dict()
    for i in range(len(arr)):
        char = arr[i]
        if arr[i] in map:
            return char
        map[arr[i]] = char
    return None


print(firstRecurringChar2(arr))
