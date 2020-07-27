# Big O notation allows us to measure the efficiency and scalability of code (Algorithmic efficiency)

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
  