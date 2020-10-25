# Graph is an abstract data type that is meant to implement the undirected graph
# and directed graph concepts from the field of graph theory within mathematics.

# A graph data structure consists of a finite (and possibly mutable) set of vertices
# (also called nodes or points), together with a set of unordered pairs of these vertices
# for an undirected graph or a set of ordered pairs for a directed graph. These pairs are
# known as edges (also called links or lines), and for a directed graph are also known as arrows.
# The vertices may be part of the graph structure, or may be external entities represented by integer
# indices or references.

# A graph data structure may also associate to each edge some edge value, such as a symbolic label
# or a numeric attribute (cost, capacity, length, etc.).

# Edge List - each item is an edge in the graph
graph = [[0,2], [2,3], [2,1], [1,3]]

# Adjacent List - index is the node and value is nodes neighbours
graph = [[2], [2,3], [0,1,3], [1,2]]

# Adjacent Matrix
graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]

#        2   0
#     1    3