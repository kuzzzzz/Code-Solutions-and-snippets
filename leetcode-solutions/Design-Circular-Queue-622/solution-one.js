class MyCircularQueue {
  constructor(k) {
    this.length = k;
    this.count = 0;
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }

    if (this.count === 0) {
      this.front = this.rear = new QueueElement(value, null, null);
      this.front.next = this.front.prev = this.front;
    } else {
      this.rear.prev = new QueueElement(value, this.rear, this.front);
      this.rear = this.rear.prev;
      this.front.next = this.rear;
    }

    this.count++;

    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    if (this.count === 1) {
      this.front = this.rear = undefined;
    } else {
      this.rear.prev = this.front.prev;
      this.front = this.front.prev;
      this.front.next = this.rear;
    }

    this.count--;

    return true;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.front.val;
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.rear.val;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.length === this.count;
  }
}

class QueueElement {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
