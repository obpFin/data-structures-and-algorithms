//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let chars = []
  for (let i = str.length; i > 0; i--) {
    chars.push(str[i])
  }
  return chars.join('')
}

console.log(reverseStringIterative('yoyo mastery'))
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
  if (str === '') {
    return ''
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseStringRecursive('gnik si pbo'))
//should return: 'obp is king'
