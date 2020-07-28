import math

# Rule 1: Worst Case
def find_nemo(fish):    # O(n)
    for i in range(len(fish)):
        if fish[i] == 'nemo':   # Assume that i is the last item in the list
            print('Found NEMO!')


# Rule 2: Remove Constants
def print_first_item_then_first_half_then_say_hi_100_times(items):  # O(1 + n/2 + 100) -> O(n)
    print(items[0])

    middle_index = math.floor(items.length / 2)
    index = 0

    while (index < middle_index):
        print(items[index])

    for _ in range(100):
        print('hi')


# Rule 3: Different terms for inputs
def compress_boxes_twice(boxes, boxes2):    # O(a + b)
    for box in boxes:
        print(box)

    for box in boxes2:
        print(box)

