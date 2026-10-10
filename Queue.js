class Queue {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.shift();
  }
  front() {
    return this.items[0];
  }
}
export { Queue };
