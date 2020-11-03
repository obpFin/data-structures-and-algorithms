# Given a number N return the index value of the Fibonacci sequence, where the sequence is:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
# the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

# For example: fibonacciRecursive(6) should return 8


def fibonacciIterative(num):
    a = 0
    b = 1
    sum = 0
    for i in range(0, num):
        sum = a+b
        a = b
        b = sum
    return sum


print('fibonacciIterative: ')
print(fibonacciIterative(12))


def fibonacciRecursive(num):     # O (2^n)
    if num < 2:
        return num
    return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)


print('fibonacciRecursive: ')
print(fibonacciRecursive(12))
