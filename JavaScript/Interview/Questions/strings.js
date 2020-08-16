// Create a function that reverses a string:

// Linear solution
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'bad input!';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

// Readable solution
function reverse2(str) {
  checkInput(str)

  return str.split('').reverse().join('');
}

// Modern solution
const reverse3 = str => checkInput(str).split('').reverse().join('');

function checkInput(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    throw new Error('Bad input!') 
  }
  return str
}

console.log(reverse3('hello'));
