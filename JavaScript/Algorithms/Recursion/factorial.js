// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {   // O(n)
  if (number === 2) {
    return 2;
  } else if (number === 1) {
    return 1
  }
  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {   // O(n)
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(5))
