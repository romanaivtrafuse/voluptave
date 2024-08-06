class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null);  // Dummy head node for simplicity
    }

    append(data) {
        let newNode = new Node(data);
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    traverse() {
        let walker = this.head.next;  // Start from the node after the dummy head
        while (walker !== null) {
            console.log(walker.data);
            walker = walker.next;
        }
    }
}

// Usage
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.traverse();  // Outputs: 1 2 3
