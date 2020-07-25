# Big O notation allows us to measure the efficiency and scalability of code (Algorithmic efficiency)

fish = ['dory', 'bruce', 'marlin', 'nemo']
nemo = ['nemo']
everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
large =['nemo'] * 1000  # Runtime increases along with the amount of items

def find_nemo(array):
  for i in range(len(array)):
    if array[i] == 'nemo':
      print('Found Nemo!')

find_nemo(everyone)
  