class Node():

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class BinarySearchTree():
    def __init__(self):
       self.root = None

    def append(self, value):
        return None
    def lookup(self, value):
        return None

tree = BinarySearchTree()
tree.append(9)
tree.append(4)
tree.append(6)
tree.append(20)
tree.append(9)
tree.append(170)
tree.append(15)
tree.append(1)

#        9
#   4         20
# 1   6    15    170

def traverse(node):
    tree = dict(value = node.value)
    tree['left'] = traverse(node['left']) if node['left'] is not None else None
    tree['right'] = traverse(node['right']) if node['right'] is not None else None
    traverse(node['right'])
    return tree
