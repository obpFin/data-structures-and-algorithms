// 1. Identify the base case
// 2. Identify the recursive case
// 3. Return when needed

let counter = 0;
function inception() {
  console.log('counter: ', counter)
  if (counter > 3) {
    return console.log('Done')
  }
  counter++;
  return inception();
}

inception();
