# Binary Tree is a special datastructure used for data storage purposes. A binary tree has a special
# condition that each node can have a maximum of two children. A binary tree has the benefits of both
# an ordered array and a linked list as search is as quick as in a sorted array and insertion or
# deletion operation are as fast as in linked list.

# Visualgo visual presentation
# https://visualgo.net/bn/bst

# Level 0: 2^0 = 1
# Level 1: 2^1 = 2
# Level 2: 2^2 = 2
# Level 3: 2^3 = 8

# # of nodes = 2^h -1
# log nodes = steps

# log 100 = 2 (10^2 = 100)

# Pros:
# Better than O (n)
# Ordered
# Flexibe size

# Cons:
# No O (1) operations

# Lookup O (log N)
# insert O (log N)
# delete O (log N)


class BinaryTreeNode():
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
