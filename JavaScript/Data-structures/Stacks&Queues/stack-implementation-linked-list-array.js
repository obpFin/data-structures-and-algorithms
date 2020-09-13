class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length-1];
  }
  push(value) {
    this.array.push(value)
    return this;
  }
  pop() {
    this.array.pop()
    return this
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.peek();

//Discord
//Udemy
//google
