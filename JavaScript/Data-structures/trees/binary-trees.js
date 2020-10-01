// Binary Tree is a special datastructure used for data storage purposes. A binary tree has a special
// condition that each node can have a maximum of two children. A binary tree has the benefits of both
// an ordered array and a linked list as search is as quick as in a sorted array and insertion or
// deletion operation are as fast as in linked list.

// Visualgo visual presentation
// https://visualgo.net/bn/bst

// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 2
// Level 3: 2^3 = 8

// # of nodes = 2^h -1
// log nodes = steps

// log 100 = 2 (10^2 = 100)

// Rules:
// 1. All child nodes in the tree right of the root node must be greater than the current node
// 2. All child nodes in the tree left of the root node must be less than the current node
// 3. Node should only have 2 children

// Pros:
// Better than O (n)
// Ordered
// Flexibe size

// Cons:
// No O (1) operations

// Lookup O (log N)
// insert O (log N)
// delete O (log N)

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
