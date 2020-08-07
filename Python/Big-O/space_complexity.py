# What causes Space complexity:

# Variables
# Data Structures
# Function Call
# Allocations


def booo(n):
    for _ in range(len(n)):
        print('boooo!')


booo([1, 2, 3, 4, 5])  # O(1)


def arrayOfHiNTimes(n):
    hiArray = []
    for i in range(len(n)):
        hiArray[i] = 'hi'  # allocates memory
    print(hiArray)
    return hiArray


arrayOfHiNTimes(6)  # O(n)
