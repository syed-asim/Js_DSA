class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let node = new StackNode(val);
        if (this.size == 0) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }
    pop() {
        if (this.size==0) {
            return null;
        }
        const topVal = this.top;
        this.top = topVal.next;

        this.size--;
        return topVal.val;
    }
}

let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(`stack size: ${stack.size}`);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(`stack size: ${stack.size}`);