// What is the Big O of the below function?
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// BIG O(3 + 4n) --> O(n)

// What is the Big O of the below function?
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 5n) --> O(n)

// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function log_all_pairs_of_array(arr) {
  for (let i in boxes) {
    for (let j in boxes) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

log_all_pairs_of_array(boxes);

// BIG O(n * n) --> O(n^2) (Quadratic time)

// Find 1st, find Nth...
const arr = [
  {
    tweet: 'hi',
    date: 2012,
  },
  {
    tweet: 'my',
    date: 2018,
  },
  {
    tweet: 'teddy',
    date: 2018,
  },
];  // O(n^2)
