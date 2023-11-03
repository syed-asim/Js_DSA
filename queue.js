class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    push(val) {
        let node = new QueueNode(val);
        if (this.size == 0) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next=node;
            this.back=node;
        }
        this.size++;
    }
    pop() {
        if (this.size==0) {
            return null;
        }
        const headTmp=this.front.val;
        this.front=this.front.next;
        this.size--;
        if (this.size==0) {
            this.back=null;
        }
        return headTmp;
    }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(`queue size: ${queue.size}`);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(`queue size: ${queue.size}`);