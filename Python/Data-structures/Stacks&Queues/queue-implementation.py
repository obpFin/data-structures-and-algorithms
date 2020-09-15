class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def peek(self):
        return self.first.data

    def enqueue(self, data):
        newNode = Node(data)

        if self.length == 0:
            self.first = newNode
            self.last = newNode
        else:
            self.last.next = newNode
            self.last = newNode
        self.length+=1
        return self

    def dequeue(self):
        if self.first:
            return None
        if self.first == self.last:
            self.last = None
        holdingPointer = self.first
        self.first = self.first.next
        self.length-=1
        return holdingPointer

    def isEmpty(self):
        return not self.first


mystack = Stack()
mystack.enqueue('google')
mystack.enqueue('udemy')
mystack.enqueue('stack overflow')
first = mystack.peek()
print(first)

