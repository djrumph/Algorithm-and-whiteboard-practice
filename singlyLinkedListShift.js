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

    shift(){
         if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        if(this.tail ==null && this.head ==null){
            return undefined
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
   
    }
}

var list = new SinglyLinkedList()
list.push("HELLO");
list.push("Goodbye");
list.push("BRO");

