// Asymptotic analysis
// Big O notation allows us to measure the efficiency and scalability of code (Algorithmic efficiency)

// O(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element

// Iterating through half a collection is still O(n) Two separate collections: O(a * b)

// What can cause time in a function:

// Operations (+, -, *, /) Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())

const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');  // Runtime increases along with the amount of items

function findNemo(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

function logFirstFish(fishes) {
  console.log(fishes[0])
}


function logFirstTwoFishes(fishes) {
  console.log(fishes[0])  // O(1)
  console.log(fishes[1])  // O(1)
}

findNemo(large)  // O(n) --> Linear Time
logFirstFish(fish)  // O(1) --> Constant Time
logFirstTwoFishes(fish)  // O(1) --> Constant Time

