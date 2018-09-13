class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList{
    constructor(){

       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    push(val){
       var newNode =  new Node(val);
        if(!this.head){
           this.head = newNode;
           this.tail = this.head;
        }
        else{
           this.tail.next = newNode;
           this.tail = newNode;

        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO");
list.push("Goodbye");
list.push("BRO");


console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.tail);
