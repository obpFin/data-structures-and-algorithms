class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {   // O(1)
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {   // O(1)
    const newNode = new Node(value)
    newNode.next = this.head
    this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this
    }
  }

  printAsList() {
    const arr = []
    let current = this.head
    while (current != null) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(1)
myLinkedList.prepend(16)
// console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.printAsList())

