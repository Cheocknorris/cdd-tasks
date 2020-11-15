class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.next = nextNode;
    }
}

// let listItem1 = new Node(100);
// let listItem2 = new Node(200);
// listItem1.next = listItem2;
// let head = listItem1;
//
// console.log(listItem1.next.value);
//


let listItem1 = new Node(100, new Node(200, new Node(300, new Node(400, null))));
let head = listItem1;

// traversing
let headDup = head;

while (headDup !== null) {
    console.log(headDup.value);
    headDup = headDup.next;
}
