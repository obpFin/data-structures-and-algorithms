# Write two functions that finds the factorial of any number.
# One should use recursive, the other should just use a for loop


def findFactorialRecursive(num):   # On)
    if num == 1:
        return 1
    return num * findFactorialRecursive(num-1)


def findFactorialIterative(num):   # On)
    result = 1
    for i in range(1, num+1):
        result = result * i
    return result


print(findFactorialRecursive(4))
print(findFactorialIterative)
