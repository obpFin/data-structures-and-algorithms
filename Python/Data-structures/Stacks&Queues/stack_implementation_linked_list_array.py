class Stack:
    def __init__(self):
        self.array = []
        self.length = 0

    def __str__(self):
        return str(self.__dict__)

    def peek(self):
        return self.array[self.length-1]

    def push(self, data):
        self.array.append(data)

    def pop(self):
        popped_item = self.array[self.length-1]
        del self.array[self.length-1]
        self.length -= 1
        return popped_item


mystack = Stack()
mystack.push('google')
mystack.push('udemy')
mystack.push('stack overflow')
top = mystack.peek()
print(top)
popped_top = mystack.pop()
print(popped_top)
