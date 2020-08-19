// Hash table (hash map) is a data structure that implements an associative array abstract data type,
// a structure that can map keys to values. A hash table uses a hash function to compute an index,
// also called a hash code, into an array of buckets or slots, from which the desired value can be found.
// During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
// (https://en.wikipedia.org/wiki/Hash_table)

let user = {
  age: 54,
  name: 'Kyle',
  magic: true,
  scream: function() {
    console.log('ahhhhhhh')
  }
}

// access
user.age    // O(1)    Hash collision - O(n)

// insert
user.spell = 'Abra kadakabra'   // O(1)

// delete
delete user.spell   // O(1)

// ES6

// Map allows to save any data type as a key, and maintains insertion order
const a = new Map()

// Set only stores keys, no values
const b = new Set()

