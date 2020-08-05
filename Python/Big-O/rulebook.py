import math

# Rule 1: Worst Case


def find_nemo(fish):    # O(n)
    for i in range(len(fish)):
        if fish[i] == 'nemo':   # Assume that i is the last item in the list
            print('Found NEMO!')


# Rule 2: Remove Constants
# O(1 + n/2 + 100) -> O(n)
def print_first_item_then_first_half_then_say_hi_100_times(items):
    print(items[0])

    middle_index = math.floor(items.length / 2)
    index = 0

    while (index < middle_index):
        print(items[index])

    for _ in range(100):
        print('hi')


# Rule 3: Different terms for inputs
# O(a + b)
def compress_boxes_twice(boxes, boxes2):
    for box in boxes:
        print(box)

    for box in boxes2:
        print(box)


# Rule 4: Drop non-dominant terms
# O(n + n^2) -> O(n^2)
def print_all_numbers_then_all_pair_sums(numbers):
    print('these are the numbers:')
    for number in numbers:
        print(number)

    print('and these are their sums:')
    for first_number in numbers:
        for second_number in numbers:
            print(first_number + second_number)

print_all_numbers_then_all_pair_sums([1, 2, 3, 4, 5])
