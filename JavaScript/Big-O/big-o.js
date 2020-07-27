// Asymptotic analysis
// Big O notation allows us to measure the efficiency and scalability of code (Algorithmic efficiency)

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

