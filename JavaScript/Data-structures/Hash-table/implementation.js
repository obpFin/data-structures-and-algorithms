class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {    // Very fast, usually O(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {   // O(1)
    let address = this._hash(key);

    // if address space is not free, create linked list
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data)
    return this.data
  }

  get(key) {     // O(1) - O(n) if memory collision
    let address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 243);
console.log(myHashTable.get('grapes'));
