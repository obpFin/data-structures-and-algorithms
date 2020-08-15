// In computer science, an array data structure, or simply an array, is a data structure consisting of a 
// collection of elements (values or variables), each identified by at least one array index or key. 
// An array is stored such that the position of each element can be computed from its index tuple by a 
// mathematical formula. (https://en.wikipedia.org/wiki/Array_data_structure)

// 4*4 = 16 bytes of storage
const strings = ['a', 'b', 'c', 'd']

// Access
strings[2]  // O(1)

// push
strings.push('e') // O(1)

// pop
strings.pop() // O(1)

// unshift
strings.unshift('x') // O(n)

// splice
strings.splice(2, 0, 'text') // O(n)

console.log(strings)