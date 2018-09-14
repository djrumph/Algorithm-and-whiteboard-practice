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
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){
        var current = this.head;
        if(this.head=== null){
            console.log("undefined");
        }
        while(current.next){
            console.log("current val: "+ current.val);
            console.log("tail val: "+ this.tail.val);
           // console.log("current.next.next val :" + current.next.next.val);
            if(!current.next.next){
                current.next = null;
                this.tail = current;
                console.log("this ran");
                break;
            }
            current = current.next;
      
        }
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
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

