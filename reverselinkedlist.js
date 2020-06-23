//Objective is to reverse a linked list.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


//O(n) solution that has a pointer at the previous node to iterate over.

let prev = null
let curr = head 

while (curr) {
    //Save the next node for reference when we need to iterate to the next one
    let temp = curr.next 
    curr.next = prev 
    prev = curr 
    curr = temp 
}

return prev