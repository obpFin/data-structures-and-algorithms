// Rules for Binary search tree:
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

// Traversal

// Breadth first search - Shortest path
// Depth first search - Check to see if something exists

// DFS traversal

// Pre-order DFS works by visiting the current node and successively moving to the left until
//  a leaf is reached, visiting each node on the way there. Once there are no more children
//  on the left of a node, the children on the right are visited. This is the most standard
//  DFS algorithm.

// Instead of visiting each node as it traverses down a tree, an in-order algorithm finds the
// leftmost node in the tree, visits that node, and subsequently visits the parent of that node.
// It then goes to the child on the right and finds the next leftmost node in the tree to visit.

// A post-order strategy works by visiting the leftmost leaf in the tree, then going up to the parent
// and down the second leftmost leaf in the same branch, and so on until the parent is the last node
// to be visited within a branch. This type of algorithm prioritizes the processing of leaves before
// roots in case a goal lies at the end of a tree.

// Questions:

// If you know a solution is not far from the root of the tree:
// Use BFS: Starts searching the closest nodes to the parent first

// If the tree is very deep and solutions are rare:
// Use BFS: DFS will take long time

// If the tree is very wide:
// Use DFS: bfs will need too much memory

// If solutions are frequent but located deep in the tree:
// Use DFS: get answer quicker, hopefully

// Determining whether a path exists between two nodes:
// Use DFS: that's what it's built for

// Finding the shortest path:
// Use BFS
