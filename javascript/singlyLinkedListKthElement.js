//4. Implement an algorithm to find the kth to last element of a singly linked list.

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

     kthElement(num){
        //store head element in variable
        var current = this.head;

        //store length number in variable
        var length = this.length;

        //check if num is within bounds of the list
        if(this.length - 1 <= 0 || num == 0){
          return undefined;
        }

        //assign variable to the numb passed into function minus the leingth of the list which should give the index of the kth to last element
        var target = length - num;

        //create count varaible to keep track of list element the list is traversed
        var count = 1;

        //while there is a node in the list
        while(current){

          //check if target equals count, if it does then return that node
          if(count === target){
            return current;
          }

          count++;

          //increment node to traverse down list
          current = current.next;
        }
    }
}

var list = new SinglyLinkedList()
for(let i = 1; i<= 50; i++){
  list.push(i);
}

console.log("the 30th to the last element of a list of 50 is: " + list.kthElement(30).val);
console.log("the 25th to the last element of a list of 50 is: " + list.kthElement(25).val);
