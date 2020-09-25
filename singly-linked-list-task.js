// this class defines a node in a singly linked list.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addNodeAtEndOfList(value) {
    // implement this function by writing the code to insert a new node at the end of this list.
    // Hint: First create a new node and then traverse the list to go to the end.
        let newListItem = new Node(value);

        if (!this.head) {
            this.head = newListItem;
        } else {
            let headDup = this.head;

            while (headDup.next !== null) {
                headDup = headDup.next;
            }
            headDup.next = newListItem;
        }


        return this.head;
    }

    addNodeInFrontOfList(value) {
    // implement this function by writing the code to insert a new node as the first node in the list.
    // Hint: First create a new node and then manipulate the head pointer to make this node the first node.
        let newListItem = new Node(value);
        newListItem.next = this.head;
        this.head = newListItem;

        return this.head;
    }

    getNodeWithValue(value) {
    // search here for the first node that has this value and return that node.
    // if there is no node with this value, return null;

        let headDup = this.head;

        while (headDup !== null) {
            if (headDup.value === value) {
                return headDup;
                break;
            } else {
                headDup = headDup.next;
            }
        }
        return null;
    }

    addNodeAtGivenPosition(value, position) {
    // Hint: traverse the list until you reach the given position and then insert the new node.
    // You might need two different pointers to achieve this.
    }
}

let listItem1 = new Node(100);
let listItem2 = new Node(200);
listItem1.next = listItem2;

let list = new SinglyLinkedList(listItem1);

list.addNodeInFrontOfList(50);
list.addNodeAtEndOfList(300);
list.getNodeWithValue(3);
