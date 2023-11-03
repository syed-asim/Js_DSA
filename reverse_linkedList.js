class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

const print = (head) => {

    let curr = head;
    while (curr != null) {
        console.log(curr.val);
        curr = curr.next;
    }
}
const printR = (head) => {
    if (head == null) {
        return;
    }
    console.log(head.val);
    printR(head.next)
}

const reverse = (head) => {
    let pre = null;
    let curr = head;
    while (curr != null) {
        let nx = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nx;
    }
    return pre;
}

const reverseR = (head) => {
    return _r(null,head);
}
const _r = (p, c) => {
    if (c == null) {
        return p;
    }
    let nx = c.next;
    c.next = p;
    p = c;
    c = nx;
   return _r(p,c);
}


printR(n1);
// console.log('-----')
// print(n1);
// console.log('-----')
// print(reverse(n1));

console.log('-----')
print(reverseR(n1));