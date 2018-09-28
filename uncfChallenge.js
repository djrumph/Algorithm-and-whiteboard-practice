/*The Fibonacci sequence, it's a mathematical sequence where every number is 
the sum of the previous two numbers in the sequence: 										 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc.
*function paramater: 																											  0  1  2  3  4  5  6   7   8   9   10 

Calling a Fibonacci function on a negative number or 0 is undefined.
*/

console.log(fibonacci(20));

// 1. Write a recursive function that returns the nth Fibonacci number.
// 2. Store the generated list of N numbers and sort them by reverse lexical order.
function fibonacci(num, highNum = 1, lowNum = 0){
//this function runs in O(n) time
  
  if(lowNum == 0){
    //incrementing num by one to match up with fib sequence output
    num+=1;
    arr = [];
  }
  
  //add numbers to an array and turn each number to string
  arr.push(lowNum.toString());
  
  //if the number is 0 or lower, return undefined
  if(num ==1 && lowNum ==0){
    return 1;
  }
  if((num < 0 &&highNum <=1) || (num ==0 &&highNum <=1)){
    return undefined;
  }
  if(num== 0){
		//note: time complexity of .sort() is O(n log (n)) greater than 10 items, otherwise it is O(n)
    //if I wrote the reverse function, first, I would loop over the array starting at index ( i = array.length)
    //then add each element as i decrements.this function would run in O(n)time.
    // I am assuming the built in javascript function runs similarly
    arraySortedInReverseLexicalOrder = arr.sort().reverse();
    console.log("Question 2, array of fibbonaci numbers sorted in revered lexical order is: " + arraySortedInReverseLexicalOrder);
    return "Question 1, nth fibonaci number is: " + lowNum;
  }
  
// recursive tail call with es6 js 
// first parameter decrements by 1. second parameter adds two numbers together to start the next sequence. third number keeps track of previous number in next sequence.
return fibonacci(num-1, highNum +lowNum, highNum);

} 



//3. Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?
console.log("Question 3, the string have unique characters? " + isUnique('789543'));

//returns true if all characters in a string are unique, returns false otherwise
function isUnique(str){
// time complexity O(n)

  let arr = str.split("");
  //declaring an empty objecy to store characters
  let ob1 = {}

  for( let val of arr){
    //see if val exsists in ob1
    if(!ob1[val]){
      ob1[val] = 1;
    }
    else{
      return false
    }
  }
  return true;

}






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

console.log("Question 4, the 30th to the last element of a list of 50 is: " + list.kthElement(30).val);
console.log("Question 4, the 25th to the last element of a list of 50 is: " + list.kthElement(25).val);




  
  
  
  
  



//5.  Write a program to sort a stack such that the smallest items are on the top.  You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).  The stack supports the following operations: push, pop, peek and isEmpty.

//there are two stacks, lowStack and highStack. there is one temp variable. 

lowStack = [33,54,32,70,56,1,403];


console.log("Question 5, the stack with smallest numbers on top: " + ascending(lowStack));

function ascending(lowStack){
    highStack =[];

    count = 0;
    sorted = false;
    while(!sorted){
      if(count % 2 == 0){
        lowToHigh();
        if(check(lowStack) == true){
          sorted = true;
        }
      }
      else{
        highToLow();
        if(check(lowStack) == true){
          sorted = true;
        }
      }
      count++
      if(count ==50){
        break;
      }
    }

  //check()
  //loop through stack and see if it is in decending order
  function check(stack){

      for(let i = 0; i<stack.length; i++){
          if(stack[i.length]>stack[i.length-1]){
          }
            return true;   
     }
  }

  function lowToHigh(){
      temp = lowStack.pop();

      //loop through the first stack
      //continue until the stack is empty
      while(lowStack.length > 0){
          //if the lowStack.pop() is bigger than temp, push the lowStack.pop() to the highStack
          if((lowStack[lowStack.length-1])> temp){
          highStack.push(lowStack.pop());
          }
          //if lowStack.pop() is smaller, push the temp value to the highStack, assign lowStack.pop() to temp
          if((lowStack[lowStack.length-1])< temp){
              highStack.push(temp);
              temp = lowStack.pop();
          }
      }
      highStack.push(temp);
  }


  function highToLow(){
      //temp equals lowStack2.pop();
      temp = highStack.pop();

      //loop through the highStack, check to see if highStack.pop() value is less than the temp value
      //continue until stack is empty
      while(highStack.length > 0){

          //if the highStack.pop() is lower, push highStack.pop() to the lowStack, 
          if(highStack[highStack.length -1] < temp){
              lowStack.push(highStack.pop());
          }
          //if the highStack.pop() is higher, push temp value to the lowStack, temp equals highStack.pop()
          if(highStack[highStack.length -1] > temp){
              lowStack.push(temp);
              temp = highStack.pop();
          }
      }
      lowStack.push(temp);
  }

  function reverse(stack){
    reversedStack = [];

    while(stack.length > 0){

      reversedStack.push(stack.pop());
    }
      return reversedStack;
  }
   return reverse(lowStack);
}



//6. Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
