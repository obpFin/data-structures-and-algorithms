class Node {
  constructor(value) {
    this.value = value
    this.next = null,
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {   // O(1)
    // checks for value
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {   // O(1)
    // checks for value
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
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

    const newNode = new Node(value)
    const leader = this.lookup(index-1)
    const follower = leader.next
    leader.next = newNode
    newNode.next = follower
    newNode.prev = leader
    follower.prev = newNode
    this.length++
    return this
  }

  remove(index) {   // O(n)
    // checks for index
    const leader = self.traversetoindex(index-1)
    const unwanted_node = leader.next
    const holder = unwanted_node.next
    leader.next = holder
    holder.prev = leader
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

const myLinkedList = new DoublyLinkedList(10)

myLinkedList.append(1)
myLinkedList.prepend(16)
myLinkedList.insert(2, 99)
console.log(myLinkedList.printAsList())
console.log(myLinkedList)

myLinkedList.remove(1)
console.log(myLinkedList.printAsList())
console.log(myLinkedList)
