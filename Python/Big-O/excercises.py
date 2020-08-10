def randomFunc():
    return

# What is the Big O of the below function?


def funChallenge(input):
    a = 10  # O(1)
    a = 50 + 3  # O(1)
    for _ in range(len(input)):  # O(n)
        randomFunc()  # O(n)
        randomVar = True  # O(n)
    return a  # O(1)

# BIG O(3 + 4n) --> O(n)

# What is the Big O of the below function?


def anotherFunChallenge(input):
    a = 5  # O(1)
    b = 10  # O(1)
    c = 50  # O(1)
    for i in range(len(input)):
        x = i + 1  # O(n)
        y = i + 2  # O(n)
        z = i + 3  # O(n)

    for j in range(len(input)):
        p = j * 2  # O(n)
        q = j * 2  # O(n)

    whoAmI = "I don't know"  # O(1)

# BIG O(4 + 5n) --> O(n)

# Log all pairs of array
boxes = ['a', 'b', 'c', 'd', 'e']

def log_all_pairs_of_array(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            print(i, j)

log_all_pairs_of_array(boxes)

# Find 1st, find Nth...
arr = [
  {
    "tweet": 'hi',
    "date": 2012,
  },
  {
    "tweet": 'my',
    "date": 2018,
  },
  {
    "tweet": 'teddy',
    "date": 2018,
  },
]  # O(n^2)