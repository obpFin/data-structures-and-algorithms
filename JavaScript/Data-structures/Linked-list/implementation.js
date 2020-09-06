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
    // checks for value
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {   // O(1)
    // checks for value
    const newNode = new Node(value)
    newNode.next = this.head
    this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {    // O(n)
    if (index === 0) {
      this.prepend(value);
      return this
    }
    if (index >= this.length) {
      this.append(value);
      return this
    }

    const newNode = {
      value,
      next: null
    }
    const leader = this.lookup(index-1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }

  remove(index) {   // O(n)
    // checks for index
    const leader = this.lookup(index-1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this
  }

  lookup(index) {   // O(n)
    // checks for index
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  reverse() {
    if (!this.head.next) {
      return this
    }
    let first = this.head
    this.tail = this.head
    let second = first.next

    while(second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this
  }

  reverse2() {
    let currentHead = this.head.next;
    let reversedList = this.head;
    reversedList.next = null;

    while (currentHead) {
      let temp = currentHead;
      currentHead = currentHead.next;

      temp.next = reversedList;
      reversedList = temp;
    }

    return reversedList
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
myLinkedList.insert(2, 99)
myLinkedList.remove(1)
// console.log(myLinkedList.printAsList())
// console.log('1', myLinkedList.reverse().printAsList())
console.log('2', myLinkedList.reverse2())
