// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

const arr = [2,5,1,9,3,15,11,33,1]

// Naive solution - O(n^2)
function firstRecurringChar(arr) {
  // Check input

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }
  return undefined
}

// Optimised solution - O(n)
function firstRecurringChar2(arr) {
  // Check input

  let map = {}
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    if (map[arr[i]] != undefined) {
      return char
    } else {
      map[arr[i]] = char
    }
  }
  return undefined
}

console.log(firstRecurringChar2(arr))