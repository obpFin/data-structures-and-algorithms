# Asymptotic analysis
# Big O notation allows us to measure the efficiency and scalability of code (Algorithmic efficiency)

# O(1) Constant- no loops
# O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items
# O(n log(n)) Log Liniear- usually sorting operations
# O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
# O(2^n) Exponential- recursive algorithms that solves a problem of size N
# O(n!) Factorial- you are adding a loop for every element

# Iterating through half a collection is still O(n) Two separate collections: O(a * b)

# What can cause time in a function:

# Operations (+, -, *, /) Comparisons (<, >, ==)
# Looping (for, while)
# Outside Function call (function())

fish = ['dory', 'bruce', 'marlin', 'nemo']
nemo = ['nemo']
everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
large =['nemo'] * 1000  # Runtime increases along with the amount of items

def find_nemo(array):
    for i in range(len(array)):
        if array[i] == 'nemo':
            print('Found Nemo!')

def log_first_fish(fishes):
    print(fishes[0])


def log_first_two_fishes(fishes):
    print(fishes[0])  # O(1)
    print(fishes[1])  # O(1)

find_nemo(large)  # O(n) --> Linear Time
log_first_fish(fish)  # O(1) --> Constant Time
log_first_two_fishes(fish)  # O(1) --> Constant Time
  