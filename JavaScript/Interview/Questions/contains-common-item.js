// Given two arrays, create a function that let's a user to know (true/false)
// whether these two arrays contain any common items
// For example:

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

// Should return false

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

// Should return true

// 2 paramaters - arrays - no size limit
// return true/false

// Brute force solution:

// Compare the values with nested loops
// O(n^2) - Time complexity
// O(1) - Space complexity

// Optimised solution:

function containsCommonItem(arr1, arr2) {
  // 1. loop through first array and create object where 
  // properties === items in the array
  // Can we assume always 2 params?
  // This should be modularised
  let map = {}
  for (let i=0; i<arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }
  // 2. loop through second array and check if item in second
  // array exists on created object.
  for (let j=0; j<arr2.length; j++) {
    if (map[arr2[j]]) {
      return true
    }
  }
  return false
  // O(a+b) - Time complexity
  // O(a) - Space complexity 
}
console.log(containsCommonItem(array3, array4))

// Readable solution:

function containsCommonItem2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
console.log(containsCommonItem2(array3, array4))
